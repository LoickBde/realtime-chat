import { TypingBar } from '../TypingBar';

export const Conversation = () => {
  return (
    <div className="grow h-full relative p-7">
      <div className="relative h-full w-full rounded-xl bg-gradient-to-t from-ctp-surface1 to-85%">
        <TypingBar />
      </div>
    </div>
  );
};
