const CoinbaseMark = ({ size = 32, className = '' }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 32 32"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" fill="#0052FF" r="16" />
    <path
      clipRule="evenodd"
      d="M16 6.5C10.7533 6.5 6.5 10.7533 6.5 16C6.5 21.2467 10.7533 25.5 16 25.5C18.6703 25.5 21.085 24.3953 22.8123 22.6074L19.3876 19.1827C18.4756 20.0488 17.294 20.65 16 20.65C13.4319 20.65 11.35 18.5681 11.35 16C11.35 13.4319 13.4319 11.35 16 11.35C17.294 11.35 18.4756 11.9512 19.3876 12.8173L22.8123 9.3926C21.085 7.60467 18.6703 6.5 16 6.5Z"
      fill="white"
      fillRule="evenodd"
    />
  </svg>
);

export default CoinbaseMark;
