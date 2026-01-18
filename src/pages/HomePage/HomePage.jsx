import {
  Header,
  Hero,
  CardsSection,
  ListingSection,
  CTASection,
  Footer,
} from "../../components";
import "./HomePage.scss";
import magazineImage from "../../assets/images/1_1,6176.png";

const HomePage = () => {
  const samplePublications = [
    {
      id: 1,
      image: magazineImage,
      isNew: true,
      type: "Dergi",
      title: "Teknoloji ve Dijital Dergisi",
      volume: 1,
      issue: 1,
      date: "Aralık 2022",
      onView: () => console.log("View clicked"),
      onDownload: () => console.log("Download clicked"),
      onNavigate: () => console.log("Navigate clicked"),
    },
    {
      id: 2,
      image: magazineImage,
      isNew: false,
      type: "Dergi",
      title: "Teknoloji ve Dijital Dergisi",
      volume: 1,
      issue: 2,
      date: "Ocak 2023",
      onView: () => console.log("View clicked"),
      onDownload: () => console.log("Download clicked"),
      onNavigate: () => console.log("Navigate clicked"),
    },
    {
      id: 3,
      image: magazineImage,
      isNew: false,
      type: "Dergi",
      title: "Teknoloji ve Dijital Dergisi",
      volume: 1,
      issue: 3,
      date: "Şubat 2023",
      onView: () => console.log("View clicked"),
      onDownload: () => console.log("Download clicked"),
      onNavigate: () => console.log("Navigate clicked"),
    },
  ];

  const handlePageChange = (page) => {
    console.log("Page changed to:", page);
  };

  const handleViewAll = () => {
    console.log("View all clicked");
  };

  return (
    <div className="home-page">
      <Header />
      <Hero />
      <CardsSection />
      <ListingSection
        title="Sayılar"
        subtitle="Dergiler"
        publications={samplePublications}
        currentPage={1}
        totalPages={5}
        onPageChange={handlePageChange}
        onViewAll={handleViewAll}
      />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
