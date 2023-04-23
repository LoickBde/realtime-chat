import {
  BiHome,
  BiLogOutCircle,
  BiUserCircle,
  BiChat,
  BiSlider,
} from 'react-icons/bi';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { MenuIcon } from '../MenuIcon';

export const Menu = () => {
  return (
    <div className="relative md:w-24 h-full flex flex-col items-center justify-center gap-3">
      <MenuIcon
        className="relative"
        icon={<BiHome className="menu__icon" size={24} />}
      />
      <MenuIcon
        className="relative"
        icon={<BiChat className="menu__icon" size={24} />}
      />
      <MenuIcon
        className="relative"
        icon={<BiSlider className="menu__icon" size={24} />}
      />
      <ThemeSwitcher />
      <MenuIcon
        className="absolute bottom-[4.5rem] h-16 w-16"
        icon={<BiUserCircle className="menu__icon" size={48} />}
      />
      <MenuIcon
        className="absolute bottom-4"
        icon={<BiLogOutCircle className="menu__icon text-ctp-red" size={24} />}
      />
    </div>
  );
};
