import SectionText from "../../atoms/SectionText";
import TitleContent from "../../atoms/TitleContent";
import DescriptionContent from "../../atoms/DescriptionContent";
import Button from "../../atoms/Button";
import image from "../../images/image (1).png";
import iconWhatSapp from "../../images/whatsapp.svg";
import "./styles.scss";

const TopCenterComponent = () => (
  <div className="top-center-component">
    <div className="top-center-content">
      <SectionText text="BOAS-VINDAS A DOCTORCARE 👋" />
      <TitleContent
        text="Assistência médica simplificada para todos"
        style={{ fontSize: "52px", fontWeight: "700px", width: "fit-content" }}
      />
      <DescriptionContent
        text="Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo."
        style={{ width: "fit-content", marginBottom: "32px" }}
      />
      <Button
        text="Agende sua consulta"
        icon={iconWhatSapp}
        backgroundColor="#00856F"
        color="#FFFFFF"
      />
    </div>
    <div className="top-center-image">
      <img src={image} alt="human" />
    </div>
  </div>
);

export default TopCenterComponent;
