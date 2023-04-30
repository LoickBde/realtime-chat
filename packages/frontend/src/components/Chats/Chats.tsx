import { BiSearchAlt } from 'react-icons/bi';
import { ChatCard } from '../ChatCard';
import { ButtonIcon } from '../ButtonIcon';

const chatContact = ['Jean', 'Pierre', 'Mbappe'];

export const Chats = () => {
  return (
    <div className="relative w-80 h-full flex flex-col">
      <div className="w-full h-20 mb-16 p-4 flex flex-row items-center justify-between">
        <p className="text-4xl font-semibold">Chats</p>
        <ButtonIcon
          className="relative"
          icon={<BiSearchAlt size={32} className="btn-icon" />}
        />
      </div>
      <div className="grow px-2">
        {chatContact.map((contact) => (
          <ChatCard contactName={contact} />
        ))}
      </div>
    </div>
  );
};