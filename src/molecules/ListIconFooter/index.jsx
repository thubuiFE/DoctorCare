// icons
import iconFB from "../../images/facebook 1.svg";
import iconInstagram from "../../images/instagram 1.svg";
import iconYoutube from "../../images/youtube 1.svg";
// others
import "./styles.scss";

const ListIconFooter = () => (
  <div className="list-icon-footer-wrapper">
    <img src={iconFB} alt="icon-FB" />
    <img src={iconInstagram} alt="icon-Instagram" />
    <img src={iconYoutube} alt="icon-Youtube" />
  </div>
);

export default ListIconFooter;
