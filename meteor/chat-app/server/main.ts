import { Meteor } from 'meteor/meteor';
import { MessagesCollection } from '/imports/models/messages';
import '/imports/methods';
import '/imports/models';

Meteor.startup(async () => {
  Meteor.publish('chat', function () {
    return MessagesCollection.find();
  });
});
