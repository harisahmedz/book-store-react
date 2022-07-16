
import classes from './Css/Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import BannerImage from '../../assets/banner.jpg';
import React from 'react';

const Header = (props)=>{
    return (
    <React.Fragment>
      <header className={classes.header}>
        <h2 className={classes.logo}>
          BookStore
        </h2>
        <div className={classes["header-right"]}>
            <HeaderCartButton onClick={props.onShowCart}/>
        </div>
      </header>
      <div className={classes.bannerImage}>
        <img src={BannerImage} alt="ImageBanner"/>
      </div>
    </React.Fragment>
    );
};

export default Header;
