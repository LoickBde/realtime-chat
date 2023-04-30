import {
  BiHome,
  BiLogOutCircle,
  BiUserCircle,
  BiChat,
  BiSlider,
} from 'react-icons/bi';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { ButtonIcon } from '../ButtonIcon';

export const Menu = () => {
  return (
    <div className="relative w-24 h-full flex flex-col items-center justify-center gap-3">
      <ButtonIcon
        className="relative"
        icon={<BiHome className="btn-icon" size={24} />}
      />
      <ButtonIcon
        className="relative"
        icon={<BiChat className="btn-icon" size={24} />}
      />
      <ButtonIcon
        className="relative"
        icon={<BiSlider className="btn-icon" size={24} />}
      />
      <ThemeSwitcher />
      <ButtonIcon
        className="absolute bottom-[4.5rem] h-16 w-16"
        icon={<BiUserCircle className="btn-icon" size={48} />}
      />
      <ButtonIcon
        className="absolute bottom-4"
        icon={<BiLogOutCircle className="btn-icon text-ctp-red" size={24} />}
      />
    </div>
  );
};
