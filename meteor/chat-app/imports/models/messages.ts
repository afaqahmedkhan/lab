import { Mongo } from 'meteor/mongo';
import { Key } from 'react';

export const MessagesCollection = new Mongo.Collection<{
  _id: Key;
  content: string;
  createdAt: Date;
}>('messages');
