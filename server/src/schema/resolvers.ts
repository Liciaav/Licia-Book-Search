import mongoose, { Document, Model } from 'mongoose';
import { signToken, AuthenticationError } from '../services/auth.js';

// Define the Book interface
interface Book {
  bookId: string;
  authors: string[];
  description: string;
  title: string;
  image: string;
  link: string;
}

// Define the User interface extending Mongoose's Document
interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  savedBooks: Book[];
  isCorrectPassword(password: string): Promise<boolean>;
}

// Ensure Mongoose model with types
const User: Model<UserDocument> = mongoose.model<UserDocument>('User');

export const resolvers = {
  Query: {
    me: async (_: any, __: any, context: any) => {
      if (context.user) {
        return await User.findById(context.user._id).populate('savedBooks');
      }
      throw new AuthenticationError('Not authenticated');
    },
  },
  Mutation: {
    login: async (_: any, { email, password }: { email: string; password: string }) => {
      const user = await User.findOne({ email });
      if (!user || !(await user.isCorrectPassword(password))) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken({ username: user.username, email: user.email, _id: user._id });
      return { token, user };
    },
    addUser: async (_: any, { username, email, password }: { username: string; email: string; password: string }) => {
      const user = await User.create({ username, email, password });
      const token = signToken({ username: user.username, email: user.email, _id: user._id});
      return { token, user };
    },
    saveBook: async (_: any, { input }: { input: Book }, context: any) => {
      if (context.user) {
        return await User.findByIdAndUpdate(
          context.user._id,
          { $addToSet: { savedBooks: input } },
          { new: true }
        );
      }
      throw new AuthenticationError('Not authenticated');
    },
    removeBook: async (_: any, { bookId }: { bookId: string }, context: any) => {
      if (context.user) {
        return await User.findByIdAndUpdate(
          context.user._id,
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
      }
      throw new AuthenticationError('Not authenticated');
    },
  },
};

export default resolvers;
