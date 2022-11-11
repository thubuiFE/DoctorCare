import "./App.scss";
import HeaderComponent from "./components/HeaderComponent";
import NumberList from "./components/NumberList";

function App() {
  return (
    <div className="doctor-care-wrapper">
      <div className="doctor-care-wrapper-inner">
        <HeaderComponent />
        <NumberList />
      </div>
    </div>
  );
}

export default App;
