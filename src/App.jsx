import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className="contents">
        <Outlet />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
