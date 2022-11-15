// libs
import React, { useState } from "react";
// dataSources
import { dataMenu } from "../../dataSources/menuData";
// context
import { useLocale } from "../../contexts/LocaleContext";
// styles
import "./styles.scss";

const HeaderMenu = ({ color }) => {
  const [itemSelected, setItemSelected] = useState(0);
  const { localeDataSource } = useLocale();

  return (
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
  );
};

export default HeaderMenu;
