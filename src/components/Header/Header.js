import React from "react";
import "./Header.css";
import logo from "../../images/download.png";
import { ShoppingBasket } from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <img className="header_logo" src={logo} alt="" />
      <div className="header_search">
        <input className="header_searchinput" type="text" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Singe In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Return</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingBasket />
          <span className="header_optionLineTwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
