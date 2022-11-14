// styles
import "./styles.scss";

const Button = ({
  text,
  icon,
  backgroundColor = "#00856F",
  color = "#FFFFFF",
}) => (
  <button
    type="button"
    className="button-wrapper"
    style={{ backgroundColor, color }}
  >
    <div>
      {icon ? <img src={icon} alt="icon" /> : <></>}
      <span>{text}</span>
    </div>
  </button>
);

export default Button;
