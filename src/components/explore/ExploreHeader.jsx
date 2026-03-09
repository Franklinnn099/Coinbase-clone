import { FiSearch } from 'react-icons/fi';

const ExploreHeader = ({ searchPlaceholder, subtitle, title }) => (
  <section className="border-b border-[#E6E8EC] px-4 py-6 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
      <div>
        <h1 className="text-[26px] font-medium tracking-[-0.03em] text-[#0A0B0D] sm:text-[38px]">
          {title}
        </h1>
        <div className="mt-1.5 flex items-center gap-2 text-[11px] text-[#5B616E] sm:text-[12px]">
          <span>{subtitle}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#5B616E]" />
        </div>
      </div>

      <label className="relative block w-full lg:w-[285px]">
        <FiSearch
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7E8492]"
          size={14}
        />
        <input
          className="h-11 w-full rounded-full border border-[#E6E8EC] bg-[#F1F3F5] pl-10 pr-4 text-[12px] text-[#0A0B0D] outline-none transition-colors placeholder:text-[#7E8492] focus:border-[#B8C2D1]"
          placeholder={searchPlaceholder}
          type="text"
        />
      </label>
    </div>
  </section>
);

export default ExploreHeader;
