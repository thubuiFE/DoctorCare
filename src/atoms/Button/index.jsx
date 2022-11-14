// styles
import "./styles.scss";

const Button = ({
  text,
  icon,
  backgroundColor = "#00856F",
  color = "#FFFFFF",
  borderColor = "#00856F",
}) => (
  <button
    type="button"
    className="button-wrapper"
    style={{ backgroundColor, color, borderColor }}
  >
    <div>
      {icon ? <img src={icon} alt="icon" /> : <></>}
      <span>{text}</span>
    </div>
  </button>
);

export default Button;
