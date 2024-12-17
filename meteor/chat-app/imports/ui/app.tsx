import React from 'react';
import { Hello } from './hello';
import { Info } from './info';

export function App() {
  return <div className="p-4 max-w-[900px] mx-auto">
    <div></div>
    <div>
      <textarea onKeyDown={e => {
        if (e.key == 'Enter')
      }}></textarea>
    </div>
  </div>;
}
