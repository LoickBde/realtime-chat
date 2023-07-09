import { Link } from '@tanstack/router';
import {
  BiChat,
  BiHome,
  BiLogOutCircle,
  BiSlider,
  BiUserCircle,
} from 'react-icons/bi';
import { ThemeSwitcher } from '../ThemeSwitcher';

export const Menu = () => {
  return (
    <div className="relative w-24 h-full flex flex-col items-center justify-center gap-3">
      <Link className="btn btn-icon" to="/">
        <BiHome className="btn-icon__content" size={24} />
      </Link>
      <Link className="btn btn-icon" to="/about">
        <BiChat className="btn-icon__content" size={24} />
      </Link>
      <Link className="btn btn-icon" to="/settings">
        <BiSlider className="btn-icon__content" size={24} />
      </Link>
      <ThemeSwitcher />
      <button className="btn btn-icon absolute bottom-[4.5rem] h-16 w-16">
        <BiUserCircle className="btn-icon__content" size={48} />
      </button>
      <button className="btn btn-icon absolute bottom-4">
        <BiLogOutCircle className="btn-icon__content text-ctp-red" size={24} />
      </button>
    </div>
  );
};
