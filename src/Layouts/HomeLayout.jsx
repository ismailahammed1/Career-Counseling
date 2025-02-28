import { FaQuoteLeft } from "react-icons/fa";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import SolutionSection from "../Components/SolutionSection";
import AboutComponent from "../Components/AboutComponent";
import StatsSection from "../Components/StatsSection";

const HomeLayout = () => {
  return (
    <div className=" ">
      <nav>
        <NavBar />
      </nav>
      <header>
        <Header />
      </header>
      <main>
        <SolutionSection />
       <AboutComponent/>
       <StatsSection/>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
