import {
  exploreHeaderData,
} from '../../data/exploreCryptoData';
import BottomCtaBanner from './BottomCtaBanner';
import CryptoPricesSection from './CryptoPricesSection';
import ExploreHeader from './ExploreHeader';
import MarketStatsSection from './MarketStatsSection';
import Sidebar from './Sidebar';

const ExploreCryptoPage = () => (
  <div className="w-full bg-white">
    <div className="mx-auto w-full max-w-[1280px] xl:border-x xl:border-[#E6E8EC]">
      <div className="flex flex-col xl:flex-row">
        <main className="min-w-0 flex-1 xl:basis-[76%] xl:border-r xl:border-[#E6E8EC]">
          <ExploreHeader
            searchPlaceholder={exploreHeaderData.searchPlaceholder}
            subtitle={exploreHeaderData.subtitle}
            title={exploreHeaderData.title}
          />
          <MarketStatsSection />
          <CryptoPricesSection />
          <BottomCtaBanner />
        </main>

        <Sidebar />
      </div>
    </div>
  </div>
);

export default ExploreCryptoPage;
