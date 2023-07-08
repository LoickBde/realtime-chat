import { useState } from 'react';
import { BiSend } from 'react-icons/bi';

export const TypingBar = () => {
  const [message, setMessage] = useState('');
  const sendBtnClassList = message.trim()
    ? ' bg-ctp-blue shadow-ctp-blue/20 focus:cursor-pointe'
    : ' bg-ctp-surface0';

  return (
    <div className="absolute w-10/12 left-1/2 -translate-x-1/2 bottom-6 flex justify-end items-center gap-5">
      <input
        className="grow h-10 px-5 bg-ctp-surface0 text-current placeholder:text-ctp-overlay0 rounded-lg shadow-lg
        outline-offset-0 outline-none 
        focus:outline-ctp-blue focus:shadow-ctp-blue/20 transition-all duration-300 ease-out"
        type="text"
        placeholder="Type something ..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <button
        className={`flex shrink-0 h-10 w-10 rounded-lg transition-all duration-300 ease-out shadow-lg${sendBtnClassList}`}
      >
        <BiSend className="btn-icon" size={24} />
      </button>
    </div>
  );
};
