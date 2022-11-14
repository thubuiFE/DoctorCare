import CardContent from "../../molecules/CardContent";
import { cardContent } from "../../dataSources/cardContent";
import "./styles.scss";

const ListCardComponent = () => (
  <div className="list-card-component-wrapper">
    {cardContent.map((item, index) => (
      <CardContent
        text={item?.title}
        description={item?.description}
        key={index}
      />
    ))}
  </div>
);

export default ListCardComponent;
