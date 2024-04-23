import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Home from "./sections/Home"
import Work from "./sections/Work"

const App = () => {
  return (
    <main id="home">
      <Navbar />
      <Sidebar />
      <section className="px-20">
        <Home />
      </section>
      <section className="px-20">
        <About />
      </section>
      <section className="px-20">
        <Experience />
      </section>
      <section className="px-20">
        <Work />
      </section>
      <section className="px-20">
        <Contact />
      </section>
    </main>
  )
}

export default App