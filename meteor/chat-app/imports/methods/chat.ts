import { MessagesCollection } from '../models/messages';

Meteor.methods({
  async 'chat.insert'(content: string) {
    if (!content) {
      throw new Meteor.Error('content is required');
    }

    await MessagesCollection.insertAsync({
      content,
      createdAt: new Date(),
    });

    console.log('content', content);
  },
});
