import { BiUserCircle } from 'react-icons/bi';

export const ChatCard = ({ contactName }: { contactName: string }) => {
  return (
    <div className="w-full h-20 bg-ctp-surface1 rounded-2xl mb-2 flex flex-row justify-around items-center cursor-pointer hover:bg-ctp-surface2/50 transition-all duration-300 ease-out">
      <BiUserCircle className="w-1/3" size={56} />
      <div className="w-2/3 flex flex-col">
        <p className="text-lg font-semibold">{contactName}</p>
        <p className="italic">Lorem ipsum dolor ...</p>
      </div>
    </div>
  );
};
