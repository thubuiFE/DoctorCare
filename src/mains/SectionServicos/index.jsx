import SectionText from "../../atoms/SectionText";
import TitleContent from "../../atoms/TitleContent";
import ListCardComponent from "../../components/ListCardContent";
import "./styles.scss";

const SectionServicos = () => (
  <div className="section-servicos-wrapper">
    <div className="section-servicos-content">
      <SectionText text="SERVIÇOS" />
      <TitleContent
        text="Como podemos ajudá-lo a se sentir melhor?"
        style={{ maxWidth: "90%", margin: "0 auto", marginTop: "16px" }}
      />
    </div>
    <ListCardComponent />
  </div>
);

export default SectionServicos;
