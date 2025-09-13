import HeroLite from "../components/HeroLite";
import TrustBadges from "../components/TrustBadges";
import FeaturesLite from "../components/FeaturesLite";
import ProductBlocks from "../components/ProductBlocks";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import CTALite from "../components/CTALite";
import DeviceServiceSection from "../components/DeviceServiceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

export default function Home() {
  return (
    <main className="flex flex-col">
      <ScrollProgress />
      <HeroLite />
      <TrustBadges />
      <FeaturesLite />
      <ProductBlocks />
      <PricingSection />
      <FAQSection />
      <DeviceServiceSection />
      <CTALite />
      <ContactSection />
      <Footer />
    </main>
  );
}
