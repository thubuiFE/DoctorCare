// components
import Title from "../../atoms/TitleContent";
import Button from "../../atoms/Button";
// icons
import iconMail from "../../images/mail 1.svg";
import iconMap from "../../images/map-pin 1.svg";
import iconWhatSapp from "../../images/whatsapp.svg";
// images
import contactImage from "../../images/image (2).png";
// others
import "./styles.scss";

const SectionContact = () => (
  <div className="section-contact-wrapper">
    <div className="section-contact-content">
      <Title
        text="Entre em contato com a gente!"
        style={{ maxWidth: "404px" }}
      />
      <div className="section-contact-icon">
        <img src={iconMap} alt="icon-map" />
        <span>R. Amauri Souza, 346</span>
      </div>
      <div className="section-contact-icon">
        <img src={iconMail} alt="icon-mail" />
        <span>contato@doctorcare.com</span>
      </div>
      <Button icon={iconWhatSapp} text="Agende sua consulta" />
    </div>
    <img
      src={contactImage}
      alt="contact-img"
      className="section-contact-image"
    />
  </div>
);

export default SectionContact;
