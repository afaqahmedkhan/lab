import { Mongo } from 'meteor/mongo';

export const MessagesCollection = new Mongo.Collection<{
  content: string;
  createdAt: Date;
}>('messages');
