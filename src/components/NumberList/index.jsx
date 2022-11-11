import "./styles.scss";

const NumberList = () => (
  <div className="number-list-wrapper">
    <div className="number-list-wrapper-inner">
      <NumberList number="+3.500" text="Pacientes atendidos" />
      <NumberList number="+15" text="Especialistas disponíveis" />
      <NumberList number="+10" text="Anos no mercado" />
    </div>
  </div>
);

export default NumberList;
