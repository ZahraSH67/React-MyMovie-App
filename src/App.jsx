import "./App.css";
import MovieCard from "./templates/MovieCard";
import SeeMoreButton from "./components/SeeMoreButton";
import Heading from "./components/Heading";
import Switch from "./components/Switch";
import PopularCard from "./templates/PopularCard";
import Footer from "./templates/Footer";

function App() {
  return (
    <div className="App">
      <header className="gridContainer">
        <Heading title="MyMovies" size="16" as="h1" />
        <Switch />
      </header>

      <main>
        <section>
          <div className="flexContainer space-between">
            <Heading title="Now Showing" size="16" as="h2" />
            <SeeMoreButton />
          </div>
          <div className="flexContainer movieCardContainer">
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
        <section>
          <div className="flexContainer space-between">
              <Heading title="Popular" size="16" as="h2" />
              <SeeMoreButton />
          </div>
              <PopularCard title="Venom Let There Be Carnage"/>
              <PopularCard title="The King’s Man"/>
              <PopularCard title="The King’s Man"/>
              <PopularCard title="The King’s Man"/>
              <PopularCard title="The King’s Man"/>
          <div>

          </div>
        </section>
      </main>
      
      <footer>
        {/* <nav className="divFooter"> */}
            <Footer />
        {/* </nav> */}
      </footer>
    </div>
  );
}

export default App;
