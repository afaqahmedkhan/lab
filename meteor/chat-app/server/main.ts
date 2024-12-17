import { Meteor } from 'meteor/meteor';
import { MessagesCollection } from '/imports/models/messages';
import '/imports/methods';

Meteor.startup(async () => {
  Meteor.publish('chat', function () {
    return MessagesCollection.find();
  });
});
