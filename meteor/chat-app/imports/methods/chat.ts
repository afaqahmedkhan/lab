import { MessagesCollection } from '../models/messages';

Meteor.methods({
  async 'chat.insert'(content: string) {
    await MessagesCollection.insertAsync({
      content,
      createdAt: new Date(),
    });

    console.log('content', content);
  },
});
