// icons
import iconShowMenu from "../../images/showMenu.svg";
import showMenu from "../../images/IconShowMenu.svg";
// others
import "./styles.scss";

const ButtonShowMenu = ({ isScroll, handleShowMenu }) => (
  <button onClick={handleShowMenu} className="btn-show-menu">
    <img
      src={isScroll ? showMenu : iconShowMenu}
      alt="close-icon"
      className="icon-show-menu"
    />
  </button>
);

export default ButtonShowMenu;
