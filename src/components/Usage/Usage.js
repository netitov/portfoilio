import React from 'react';
import Promo from '../Promo/Promo';
import promoImg from '../../images/light/usage_promo1.png';
import CardList from '../CardList/CardList';
import { usageRows } from '../../utils/constants';

function Usage(props) {
  return (
    <div className="usage">
      <Promo imgSrc={promoImg}>
        <div className="usage__promo-box">
          <p className="usage__promo-text">
            Some examples
            <br />
            of the usage
            <br />
            of my works
            <br />
          </p>
        </div>
      </Promo>
      <div className="usage__pictures">
        <CardList
          onCardClick={props.handleCardClick}
          rowClass="usage__img-row"
          rows={usageRows}
          linkActive
          linkClass=" usage__img-link"
        />
      </div>
    </div>
  );
}

export default Usage;
