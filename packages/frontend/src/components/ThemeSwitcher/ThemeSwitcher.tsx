import { useContext, useState } from 'react';
import { ThemeContext } from '../../context';
import { BiSun, BiMoon } from 'react-icons/bi';
import { ThemeEnum } from '../../constants';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [animate, setAnimate] = useState(false);

  const iconClass = `btn-icon${animate ? ' animate-toggleIcon' : ''}`;

  return (
    <button
      className="btn-icon-container relative text-ctp-yellow"
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
