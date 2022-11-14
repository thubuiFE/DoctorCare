import "./styles.scss";
import NumberTop from "../../molecules/NumberTop";

const NumberList = () => (
  <div className="number-list-wrapper">
    <div className="number-list-wrapper-inner">
      <NumberTop number="+3.500" text="Pacientes atendidos" />
      <NumberTop number="+15" text="Especialistas disponíveis" />
      <NumberTop number="+10" text="Anos no mercado" />
    </div>
  </div>
);

export default NumberList;
