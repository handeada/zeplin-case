import {
  Header,
  Hero,
  PromotionSection,
  ListingSection,
  CTASection,
  Footer,
} from "../../components";
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
