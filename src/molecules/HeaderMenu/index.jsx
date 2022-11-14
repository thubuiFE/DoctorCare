// libs
import React, { useState } from "react";
// dataSources
import { dataMenu } from "../../dataSources/menuData";
// styles
import "./styles.scss";

const HeaderMenu = ({ color }) => {
  const [itemSelected, setItemSelected] = useState(0);

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
                <span style={{ borderColor: color }}>{item?.title}</span>
              ) : (
                item?.title
              )}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenu;
