import React from 'react';

export const MenuIcon = ({
  className,
  icon,
}: {
  className?: string;
  icon: React.ReactNode;
}) => {
  const classList = `menu__icon-container${className ? ` ${className}` : ''}`;
  return <button className={classList}>{icon}</button>;
};
