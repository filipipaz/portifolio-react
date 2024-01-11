import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projetos } from "./components/Projetos";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projetos />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
