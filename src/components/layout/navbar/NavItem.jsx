import { Link } from 'react-router-dom';

const NavItem = ({ isHighlighted, isOpen, item, onOpen }) => {
  const stateClasses = isHighlighted
    ? 'bg-[#F1F3F5] text-[#0A0B0D]'
    : 'text-[#0A0B0D] hover:bg-[#F6F7F8]';

  return (
    <div className="flex h-full items-center" onMouseEnter={() => onOpen(item.label)}>
      <Link
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`inline-flex h-10 items-center rounded-full px-4 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200 focus:outline-none focus-visible:bg-[#F1F3F5] ${stateClasses}`}
        onFocus={() => onOpen(item.label)}
        to={item.href}
      >
        {item.label}
      </Link>
    </div>
  );
};

export default NavItem;
