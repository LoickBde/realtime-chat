import { useContext, useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import { ThemeEnum } from '../../constants';
import { ThemeContext } from '../../context';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [animate, setAnimate] = useState(false);

  const iconClass = `btn-icon__content${animate ? ' animate-toggleIcon' : ''}`;

  return (
    <button
      className="btn btn-icon text-ctp-yellow"
      onClick={() => {
        setAnimate(true);
        toggleTheme();
      }}
      onAnimationEnd={() => setAnimate(false)}
    >
      {theme === ThemeEnum.LIGHT ? (
        <BiSun className={iconClass} size={24} />
      ) : (
        <BiMoon className={iconClass} size={24} />
      )}
    </button>
  );
};
