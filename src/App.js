import "./App.scss";
import TopHeader from "./mains/TopHeader";
import SectionServicos from "./mains/SectionServicos";
import SectionSobre from "./mains/SectionSobre";
import SectionContact from "./mains/SectionContact";
import Footer from "./mains/Footer";
import { LocalProvider } from "./contexts/LocaleContext";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="doctor-care-wrapper">
          <LocalProvider>
            <TopHeader />
          </LocalProvider>
          <SectionServicos />
          <SectionSobre />
          <SectionContact />
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
