
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import SolutionSection from "../Components/SolutionSection";
import AboutComponent from "../Components/AboutComponent";
import StatsSection from "../Components/StatsSection";
import ComponentService from "../Components/ComponentService";


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
       <ComponentService/>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
