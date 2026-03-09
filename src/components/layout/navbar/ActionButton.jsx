import { Link } from 'react-router-dom';

const VARIANT_STYLES = {
  icon: 'h-10 w-10 rounded-full bg-[#F1F3F5] text-[#0A0B0D] hover:bg-[#E7EAEE]',
  secondary: 'h-10 rounded-full bg-[#F1F3F5] px-5 text-[15px] font-medium text-[#0A0B0D] hover:bg-[#E7EAEE]',
  primary: 'h-10 rounded-full bg-[#0052FF] px-5 text-[15px] font-medium text-white hover:bg-[#0047D9]',
};

const baseClasses =
  'inline-flex items-center justify-center transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0052FF]/35';

const ActionButton = ({
  ariaLabel,
  children,
  className = '',
  icon,
  onClick,
  to,
  type = 'button',
  variant = 'icon',
}) => {
  const classes = `${baseClasses} ${VARIANT_STYLES[variant]} ${className}`.trim();

  if (to) {
    return (
      <Link aria-label={ariaLabel} className={classes} onClick={onClick} to={to}>
        {icon ?? children}
      </Link>
    );
  }

  return (
    <button
      aria-label={ariaLabel}
      className={classes}
      onClick={onClick}
      type={type}
    >
      {icon ?? children}
    </button>
  );
};

export default ActionButton;
