import { useSubscribe, useTracker } from '@meteor-vite/react-meteor-data';
import React from 'react';
import { MessagesCollection } from '../models/messages';

export function App() {

  useSubscribe('chat');

  const messages = useTracker(() => {
    return MessagesCollection.find({}, { sort: { createdAt: 1 } }).fetch();
  })

  return <div className="flex flex-col p-4 max-w-[900px] mx-auto h-screen">
    <div className='flex-grow'>
      {messages.map((message) => {
        return <div key={message._id} className='p-2 border border-slate-100 rounded mb-2'>
          <p>{message.content}</p>
        </div>
      })}
    </div>

    <div className='relative border border-slate-500 rounded h-24'>
      <textarea className='absolute w-full border-none m-0 h-full' onKeyDown={async e => {
        if (e.key == 'Enter') {
          e.preventDefault();
          console.log(e.target);
          await Meteor.callAsync('chat.insert', e.target.value);
        }
      }}></textarea>
    </div>
  </div>;
}
