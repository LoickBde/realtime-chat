import React from 'react';

export const ButtonIcon = ({
  className = '',
  icon,
}: {
  className?: string;
  icon: React.ReactNode;
}) => {
  const classList = `btn-icon-container${className?.trim() && ` ${className}`}`;
  return <button className={classList}>{icon}</button>;
};
