import "./App.scss";
import TopHeader from "./mains/TopHeader";
import SectionServicos from "./mains/SectionServicos";
import SectionSobre from "./mains/SectionSobre";
import SectionContact from "./mains/SectionContact";
import Footer from "./mains/Footer";

function App() {
  return (
    <div className="doctor-care-wrapper">
      <TopHeader />
      <SectionServicos />
      <SectionSobre />
      <SectionContact />
      <Footer />
    </div>
  );
}

export default App;
