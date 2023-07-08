import { Chats } from '../Chats';
import { Conversation } from '../Conversation';

export const Home = () => {
  return (
    <div className="w-full h-full flex flex-row">
      <Chats />
      <Conversation />
    </div>
  );
};
