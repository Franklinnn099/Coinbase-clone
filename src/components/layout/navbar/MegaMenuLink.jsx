import { Link } from 'react-router-dom';

const MegaMenuLink = ({ item }) => {
  const Icon = item.icon;

  return (
    <Link
      className="group flex items-start gap-4 rounded-[20px] px-3 py-3 transition-colors duration-200 hover:bg-white focus:outline-none focus-visible:bg-white"
      to={item.href}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#E4E7EC] bg-white text-[#0A0B0D] shadow-[0_1px_2px_rgba(10,11,13,0.04)] transition-colors duration-200 group-hover:border-[#D9DEE7]">
        <Icon size={18} />
      </div>
      <div className="min-w-0 pt-0.5">
        <div className="text-[15px] font-semibold leading-5 tracking-[-0.01em] text-[#0A0B0D]">
          {item.title}
        </div>
        <p className="mt-1 text-[14px] leading-[1.45] text-[#5B616E]">
          {item.description}
        </p>
      </div>
    </Link>
  );
};

export default MegaMenuLink;
