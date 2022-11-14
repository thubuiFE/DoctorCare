import TopCenterComponent from "../../components/TopCenterComponent";
import HeaderComponent from "../../components/HeaderComponent";
import NumberList from "../../components/NumberList";
import "./styles.scss";

const TopHeader = () => (
  <div className="top-header-wrapper">
    <HeaderComponent />
    <TopCenterComponent />
    <NumberList />
  </div>
);

export default TopHeader;
