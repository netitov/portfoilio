import React from 'react';

function Promo(props) {

  return (
    <div className="promo">
      <div className="promo__container">
        <img className="promo__img" src={props.imgSrc} alt="people"></img>
        <div className="promo__overlay"></div>
        {/* <div className="promo__text-box"> */}

          {props.children}
        {/* </div> */}
      </div>
    </div>
  );
}


export default Promo;
