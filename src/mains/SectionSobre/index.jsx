// components
import Title from "../../atoms/TitleContent";
import DescriptionContent from "../../atoms/DescriptionContent";
import Section from "../../atoms/SectionText";
// images
import doctor_image from "../../images/happy-doctor-holding-a-clipboard-with-patients.png";
// others
import "./styles.scss";

const SectionSobre = () => (
  <div className="section-sobre-wrapper">
    <img src={doctor_image} alt="doctor_image" />
    <div className="section-sobre-content">
      <Section text="SOBRE NÓS" />
      <Title
        text="Entenda quem somos e por que existimos"
        style={{ maxWidth: "447px" }}
      />
      <DescriptionContent
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
        style={{ maxWidth: "573px" }}
      />
    </div>
  </div>
);

export default SectionSobre;
