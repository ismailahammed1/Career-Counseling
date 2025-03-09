import { ServicesProvider } from "./Contex/ServicesContext"
import HomeLayout from "./Layouts/HomeLayout"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


function App() {


  return (
   <ServicesProvider>
    <HomeLayout/>
   </ServicesProvider>
  )
}

export default App
