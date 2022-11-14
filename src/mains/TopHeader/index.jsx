import TopCenterComponent from "../../components/TopCenterComponent";
import HeaderComponent from "../../components/HeaderComponent";
import NumberList from "../../components/NumberList";
import "./styles.scss";
import { useEventListener } from "../../hooks/useEventListener";
import { useState } from "react";
import Logo from "../../images/Logo (1).svg";
import LogoScroll from "../../images/LogoMobileHeader.svg";

const TopHeader = () => {
  const [isScroll, setScroll] = useState(false);

  const handleScroll = () => {
    window.scrollY >= 100 ? setScroll(true) : setScroll(false);
  };

  useEventListener("scroll", handleScroll);

  const backgroundColor = isScroll ? "#00856F" : "#DCE9E2";
  const logo = isScroll ? LogoScroll : Logo;
  const color = isScroll ? "white" : "#00856F";

  return (
    <div className="top-header-wrapper">
      <HeaderComponent
        backgroundColor={backgroundColor}
        logo={logo}
        color={color}
      />
      <div className="top-header-content">
        <TopCenterComponent />
        <NumberList />
      </div>
    </div>
  );
};

export default TopHeader;
