import { useState } from 'react';
import { BiSend } from 'react-icons/bi';

export const TypingBar = () => {
  const [message, setMessage] = useState('');
  const sendBtnClassList = message.trim()
    ? ' bg-ctp-blue shadow-ctp-blue/20 focus:cursor-pointe hover:bg-ctp-blue'
    : ' bg-ctp-surface0 hover:bg-ctp-surface0';

  return (
    <div className="absolute w-10/12 left-1/2 -translate-x-1/2 bottom-6 flex justify-end items-center gap-5">
      <input
        className="grow h-10 px-5 bg-ctp-surface0 text-current placeholder:text-ctp-overlay0 rounded-lg shadow-lg
        outline-offset-0 outline-none 
        focus:outline-ctp-blue focus:shadow-ctp-blue/20 base-transition"
        type="text"
        placeholder="Type something ..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <button
        className={`btn btn-icon shrink-0 rounded-lg shadow-lg${sendBtnClassList}`}
      >
        <BiSend className="btn-icon__content" size={24} />
      </button>
    </div>
  );
};
