// libs
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";
// context
import { useLocale } from "../../contexts/LocaleContext";
import { fetchDataMenu } from "../../reducer/fetchDataMenu";
// styles
import "./styles.scss";

const HeaderMenu = ({ color }) => {
  const [itemSelected, setItemSelected] = useState(0);
  const { localeDataSource } = useLocale();
  // Demo redux toolkit
  const dispatch = useDispatch();
  const dataMenu = useSelector((state) => state?.fetchData?.dataMenu);

  // Demo router-query
  const fetchDataMenu = () =>
    fetch("http://localhost:3000/menu_data").then((res) => res.json());

  const getListQuery = useQuery("data-menu", fetchDataMenu, {
    cacheTime: Infinity,
  });

  const { data, isLoading } = getListQuery;

  return (
    !isLoading && (
      <div className="header-menu-wrapper">
        <ul>
          {data?.map((item) => (
            <a
              href="#"
              key={item?.key}
              onClick={() => setItemSelected(item?.key)}
            >
              <li
                className={item?.key === itemSelected ? "li-selected" : ""}
                style={{ color }}
              >
                {item?.key === itemSelected ? (
                  <span style={{ borderColor: color }}>
                    {localeDataSource[item?.title]}
                  </span>
                ) : (
                  localeDataSource[item?.title]
                )}
              </li>
            </a>
          ))}
        </ul>
      </div>
    )
  );
};

export default HeaderMenu;
