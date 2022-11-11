// components
import HeaderMenu from "../../molecules/HeaderMenu";
import Button from "../../atoms/Button";
import Logo from "../../images/Logo.png";
// styles
import "./styles.scss";

const HeaderComponent = () => (
  <div className="header-component-wrapper">
    <img
      src={Logo}
      alt="Logo"
      style={{ width: "132.86px", height: "17.38px" }}
    />
    <HeaderMenu />
    <Button text="Agendar consulta" backgroundColor="#DCE9E2" color="#00856F" />
  </div>
);

export default HeaderComponent;
