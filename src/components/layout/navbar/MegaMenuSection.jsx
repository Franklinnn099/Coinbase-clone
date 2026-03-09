import MegaMenuLink from './MegaMenuLink';

const MegaMenuSection = ({ section }) => (
  <section>
    <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7E8492]">
      {section.title}
    </p>
    <div className="space-y-1">
      {section.items.map((item) => (
        <MegaMenuLink item={item} key={item.title} />
      ))}
    </div>
  </section>
);

export default MegaMenuSection;
