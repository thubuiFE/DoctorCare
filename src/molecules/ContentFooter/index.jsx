// images
import Logo from "../../images/LOGO.svg";
// others
import "./styles.scss";

const ContentFooter = () => (
  <div className="content-footer-wrapper">
    <img src={Logo} alt="Logo" />
    <div className="content-footer">
      <div>©2022 - DoctorCare.</div>
      <div>Todos os direitos reservados.</div>
    </div>
  </div>
);

export default ContentFooter;
