// libs
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// context
import { useLocale } from "../../contexts/LocaleContext";
import { fetchDataMenu } from "../../reducer/fetchDataMenu";
// styles
import "./styles.scss";

const HeaderMenu = ({ color }) => {
  const [itemSelected, setItemSelected] = useState(0);
  const { localeDataSource } = useLocale();
  const dispatch = useDispatch();
  const dataMenu = useSelector((state) => state?.fetchData?.dataMenu);

  useEffect(() => {
    dispatch(fetchDataMenu());
  }, []);

  return (
    dataMenu && (
      <div className="header-menu-wrapper">
        <ul>
          {dataMenu?.map((item) => (
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
