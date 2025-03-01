import { useState } from 'react';
import { IconType } from 'react-icons';

interface ToolbarIconProps {
  defaultIcon: IconType;
  hoverIcon: IconType;
}

export const ToolbarIcon = ({ defaultIcon: DefaultIcon, hoverIcon: HoverIcon }: ToolbarIconProps) => { 
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <button 
        className="toolbar-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? <HoverIcon size={24} /> : <DefaultIcon size={24} />}
      </button>
    </>
  );
};