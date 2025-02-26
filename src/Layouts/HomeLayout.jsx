import Footer from "../Components/Footer"
import Header from "../Components/Header"
import NavBar from "../Components/NavBar"
import SolutionSection from "../Components/SolutionSection"


const HomeLayout = () => {
  return (
    <div className=" ">
        <nav>
            <NavBar/>
        </nav>
        <header>
            <Header/>
        </header>
        <main>
          <SolutionSection/>
        </main>
        <Footer></Footer> 
    </div>
  )
}

export default HomeLayout