// libs
import { useEffect } from "react";
import useSWR from "swr";
import { useSelector, useDispatch } from "react-redux";
import CardContent from "../../molecules/CardContent";
// reducers
import { fetchDataContent } from "../../reducer/fetchDataMenu";
// others
import "./styles.scss";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ListCardComponent = () => {
  // Demo reduxToolkit
  const dataResponse = useSelector((state) => state?.fetchData?.dataContent);
  const dispatch = useDispatch();

  // Demo useSWR
  const { data, error } = useSWR("http://localhost:3000/card_content", fetcher);

  return (
    data?.length > 0 && (
      <div className="list-card-component-wrapper">
        {data.map((item, index) => (
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
