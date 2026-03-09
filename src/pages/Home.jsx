import HeroSection from '../components/home/HeroSection';
import CryptoTable from '../components/home/CryptoTable';
import AdvancedTrading from '../components/home/AdvancedTrading';
import PlatformCapabilities from '../components/home/PlatformCapabilities';
import LearnSection from '../components/home/LearnSection';
import CtaBanner from '../components/home/CtaBanner';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <CryptoTable />
      <AdvancedTrading />
      <PlatformCapabilities />
      <LearnSection />
      <CtaBanner />
    </div>
  );
};

export default Home;
