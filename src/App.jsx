import { AboutMe } from './components/AboutMe'
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projetos } from "./components/Projetos";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projetos />
      <AboutMe/>
    </>
  );
}

export default App;
