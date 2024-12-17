import { Mongo } from 'meteor/mongo';

export const MessagesCollection = new Mongo.Collection<{
  _id: string;
  content: string;
  createdAt: Date;
}>('messages');
