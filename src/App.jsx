import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MessageUs from "./components/MessageUs";
import Services from "./components/Service";

export default function App() {
  return (
    <>
      <div className="box-border ">
        <Header />
        <AboutUs />
        <Services />
        <MessageUs />
        <Footer />
      </div>
    </>
  );
}
