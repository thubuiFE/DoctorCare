// libs
import React, { useState } from "react";
// components
import HeaderMenu from "../../molecules/HeaderMenu";
import Button from "../../atoms/Button";
import ButtonShowMenu from "../../molecules/ButtonShowMenu";
import ModalHeader from "../../molecules/ModalHeader";
// hooks
import { useWindowSize } from "../../hooks/useWindowSize";
// contexts
import { useLocale } from "../../contexts/LocaleContext";
// styles
import "./styles.scss";

const HeaderComponent = ({ backgroundColor, logo, color }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowSize();

  const { locale, setLocale, localeDataSource } = useLocale();

  return (
    <div className="header-component-wrapper" style={{ backgroundColor }}>
      <img
        src={logo}
        alt="Logo"
        style={{ width: "132.86px", height: "17.38px" }}
      />
      <div className="locale-change">
        <select
          className="select-change-locale"
          defaultValue={locale}
          onChange={(e) => setLocale(e.target.value)}
        >
          <option value="vi">{localeDataSource.vi}</option>
          <option value="en">{localeDataSource.en}</option>
        </select>
      </div>
      {width > 750 ? (
        <>
          <HeaderMenu color={color} />
          <Button
            text={localeDataSource?.schedule_your_consultation}
            backgroundColor={backgroundColor}
            color={color}
            borderColor={color}
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
