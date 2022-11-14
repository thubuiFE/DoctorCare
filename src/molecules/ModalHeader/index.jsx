// components
import HeaderMenu from "../HeaderMenu";
import Button from "../../atoms/Button";
import ListIconFooter from "../ListIconFooter";
// images
import LogoMobile from "../../images/LogoMobileHeader.svg";
import Close from "../../images/Close.svg";
// others
import "./styles.scss";

const ModalHeaderMobile = ({ closeModal }) => {
  return (
    <div className="modal-header-mobile">
      <div className="modal-header-logo">
        <img src={LogoMobile} alt="logo_mobile" />
        <img
          src={Close}
          alt="btn-close"
          className="btn-close"
          onClick={closeModal}
        />
      </div>
      <HeaderMenu />
      <Button
        text="AGENDE SUA CONSULTA"
        backgroundColor="#FFFFFF"
        color="#00856F"
      />
      <ListIconFooter />
    </div>
  );
};

export default ModalHeaderMobile;
