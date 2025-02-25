import Header from "../Components/Header"
import NavBar from "../Components/NavBar"


const HomeLayout = () => {
  return (
    <div className=" ">
        <nav>
            <NavBar/>
        </nav>
        <header>
            <Header/>
        </header>
        <main></main>
    </div>
  )
}

export default HomeLayout