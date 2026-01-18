import { useState } from "react";
import {
  Header,
  Hero,
  CardsSection,
  PromotionSection,
  ListingSection,
  CTASection,
  Footer,
} from "../../components";
import "./HomePage.scss";
import magazineImage from "../../assets/images/1_1,6176.png";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

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
    {
      id: 4,
      image: magazineImage,
      isNew: false,
      type: "Dergi",
      title: "Teknoloji ve Dijital Dergisi",
      volume: 1,
      issue: 4,
      date: "Mart 2023",
      onView: () => console.log("View clicked"),
      onDownload: () => console.log("Download clicked"),
      onNavigate: () => console.log("Navigate clicked"),
    },
    {
      id: 5,
      image: magazineImage,
      isNew: false,
      type: "Dergi",
      title: "Teknoloji ve Dijital Dergisi",
      volume: 1,
      issue: 5,
      date: "Nisan 2023",
      onView: () => console.log("View clicked"),
      onDownload: () => console.log("Download clicked"),
      onNavigate: () => console.log("Navigate clicked"),
    },
    {
      id: 6,
      image: magazineImage,
      isNew: false,
      type: "Dergi",
      title: "Teknoloji ve Dijital Dergisi",
      volume: 1,
      issue: 6,
      date: "Mayıs 2023",
      onView: () => console.log("View clicked"),
      onDownload: () => console.log("Download clicked"),
      onNavigate: () => console.log("Navigate clicked"),
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
        currentPage={currentPage}
        totalPages={2}
        onPageChange={handlePageChange}
        onViewAll={handleViewAll}
      />
      <PromotionSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
