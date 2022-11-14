// libs
import React, { useState } from "react";
// dataSources
import { dataMenu } from "../../dataSources/menuData";
// styles
import "./styles.scss";

const HeaderMenu = () => {
  const [itemSelected, setItemSelected] = useState(0);

  return (
    <div className="header-menu-wrapper">
      <ul>
        {dataMenu?.map((item) => (
          <a
            href="/"
            key={item?.key}
            onClick={() => setItemSelected(item?.key)}
          >
            <li className={item?.key === itemSelected ? "li-selected" : ""}>
              {item?.title}
            </li>
            {item?.key === itemSelected && (
              <div className="item-selected"></div>
            )}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenu;
