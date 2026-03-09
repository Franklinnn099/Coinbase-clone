import { FiArrowRight } from 'react-icons/fi';

const BannerGraphic = () => (
  <svg
    aria-hidden="true"
    className="h-[86px] w-[180px]"
    viewBox="0 0 180 86"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="#D7E2FF" height="24" width="100" x="50" y="48" />
    <rect fill="#FFFFFF" height="26" width="14" x="74" y="32" />
    <rect fill="#FF4D5A" height="34" width="12" x="72" y="24" />
    <rect fill="#19A26B" height="50" width="14" x="98" y="8" />
    <rect fill="#8BB2FF" height="36" width="14" x="124" y="22" />
    <rect fill="#3ED66B" height="44" width="12" x="121" y="14" />
    <path d="M52 66 L86 44 L108 36 L131 20" stroke="#0A0B0D" strokeLinecap="round" strokeWidth="2" />
    <path d="M131 20 L129 29 L138 27" fill="none" stroke="#0A0B0D" strokeLinecap="round" strokeWidth="2" />
    <path d="M52 32 H68" stroke="#0A0B0D" strokeLinecap="round" strokeWidth="2" />
    <path d="M58 26 H74" stroke="#0A0B0D" strokeLinecap="round" strokeWidth="2" />
  </svg>
);

const BottomCtaBanner = () => (
  <section className="mt-8 bg-[#1652F0] px-5 py-7 sm:px-8">
    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div className="max-w-[380px]">
        <h2 className="text-[18px] font-medium leading-[1.2] tracking-[-0.03em] text-white sm:text-[20px]">
          Create a Coinbase account to trade crypto. It&apos;s quick, easy, and secure.
        </h2>
        <button
          className="mt-5 inline-flex h-10 items-center gap-8 rounded-full bg-white px-5 text-[12px] font-medium text-[#0A0B0D]"
          type="button"
        >
          <span>Start Trading</span>
          <FiArrowRight size={14} />
        </button>
      </div>

      <div className="flex justify-end">
        <BannerGraphic />
      </div>
    </div>
  </section>
);

export default BottomCtaBanner;
