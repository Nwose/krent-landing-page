import Cards from "./components/Cards";
import Header from "./components/Header";
import News from "./components/News";
import Showcase from "./components/Showcase";
import Topbar from "./components/Topbar";



function App() {
  return (
    <div className="container">
      <Topbar />
      <Header />
      <Showcase />
      <News />
      <Cards />
    </div>
  );
}

export default App;
