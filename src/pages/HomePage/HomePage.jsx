import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import PromotionSection from "../../components/PromotionSection/PromotionSection";
import ListingSection from "../../components/ListingSection/ListingSection";
import CTASection from "../../components/CTASection/CTASection";
import Footer from "../../components/Footer/Footer";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <ListingSection />
      <PromotionSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
