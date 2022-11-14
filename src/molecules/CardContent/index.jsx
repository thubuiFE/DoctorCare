import TitleContent from "../../atoms/TitleContent";
import DescriptionContent from "../../atoms/DescriptionContent";
// others
import iconCheck from "../../images/Group 2.png";
import "./styles.scss";

const CardContent = ({ text, description }) => (
  <div className="card-content-wrapper">
    <img src={iconCheck} alt="icon" />
    <TitleContent text={text} style={{ fontSize: "24px" }} />
    <DescriptionContent text={description} />
  </div>
);

export default CardContent;
