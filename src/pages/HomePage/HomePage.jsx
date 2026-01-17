import {
  Header,
  Hero,
  CardsSection,
  ListingSection,
  CTASection,
  Footer,
} from '../../components';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <CardsSection />
      <ListingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
