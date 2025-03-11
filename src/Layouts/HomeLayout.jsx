import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import SolutionSection from "../Components/SolutionSection";
import AboutComponent from "../Components/AboutComponent";
import StatsSection from "../Components/StatsSection";
import ComponentService from "../Components/ComponentService";
import ClientLogos from "../Components/ClientLogos";
import Testimonials from "../Components/Testimonials";
import TeamSlider from "../Components/TeamSlider";
import NewsSection from "../Components/NewsSection";
import ServicesSection from "../Components/ServicesSection";


const HomeLayout = () => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <header>
        <Header />
      </header>
      <main>
        <SolutionSection />
        <AboutComponent />
        <StatsSection />
        
        {/*  Showing only 6 services & More button */}
        <ComponentService limit={6} showMoreButton={true} to="services" />

        <ClientLogos />
        <Testimonials />
        <ServicesSection />
        <TeamSlider />
        <NewsSection />

        {/* ✅ New Sections */}
       
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
