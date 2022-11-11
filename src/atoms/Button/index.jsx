// styles
import "./styles.scss";

const Button = ({ text, icon, backgroundColor, color }) => (
  <button
    type="button"
    className="button-wrapper"
    style={{ backgroundColor, color }}
  >
    {icon ? <image src={icon} alt="icon" /> : <></>}
    {text}
  </button>
);

export default Button;
