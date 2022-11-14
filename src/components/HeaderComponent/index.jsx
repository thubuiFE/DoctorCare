// libs
import React, { useState } from "react";
// components
import HeaderMenu from "../../molecules/HeaderMenu";
import Button from "../../atoms/Button";
import ButtonShowMenu from "../../molecules/ButtonShowMenu";
import ModalHeader from "../../molecules/ModalHeader";
// hooks
import { useWindowSize } from "../../hooks/useWindowSize";

// styles
import "./styles.scss";

const HeaderComponent = ({ backgroundColor, logo, color }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowSize();

  return (
    <div className="header-component-wrapper" style={{ backgroundColor }}>
      <img
        src={logo}
        alt="Logo"
        style={{ width: "132.86px", height: "17.38px" }}
      />
      {width > 750 ? (
        <>
          <HeaderMenu color={color} />
          <Button
            text="Agendar consulta"
            backgroundColor={backgroundColor}
            color={color}
            borderColor="white"
          />
        </>
      ) : (
        <ButtonShowMenu
          isScroll={color === "white" ? true : false}
          handleShowMenu={() => setShowMenu(true)}
        />
      )}
      {showMenu && (
        <ModalHeader isShow={showMenu} closeModal={() => setShowMenu(false)} />
      )}
    </div>
  );
};

export default HeaderComponent;
