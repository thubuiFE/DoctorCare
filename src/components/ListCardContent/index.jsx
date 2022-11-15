import CardContent from "../../molecules/CardContent";
// import { cardContent } from "../../dataSources/cardContent";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataContent } from "../../reducer/fetchDataMenu";
import { useEffect } from "react";

const ListCardComponent = () => {
  const dataResponse = useSelector((state) => state?.fetchData?.dataContent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataContent());
  }, []);

  return (
    dataResponse?.length > 0 && (
      <div className="list-card-component-wrapper">
        {dataResponse.map((item, index) => (
          <CardContent
            text={item?.title}
            description={item?.description}
            key={index}
          />
        ))}
      </div>
    )
  );
};

export default ListCardComponent;
