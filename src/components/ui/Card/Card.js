import React, { Component } from 'react';
import modules from './Card.module.css';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux/Aux';

class Card extends Component {
  render() {
    return (
      <Aux>
        <article className={modules.card__straight}>
          <div className={modules.card__media}>
            <img src="http://placehold.it/300x300" alt="card media" />
            <div className={modules.card__date}>
              <span className={modules.date__day}>27</span>
              <span className={modules.date__month}>Mar</span>
            </div>
            <span className={module.card__category}>Photos</span>
          </div>
          <div className="card__content">
            <header className={module.card__header}>
              <h2 className={module.card__title}>City Lights in New York</h2>
              <div className={module.card__subtitle}>
                The city that never sleeps
              </div>
            </header>
            <p className={module.card__excerpt}>
              New York, the largest city in the U.S., is an architectural marvel
              with plenty of historic monuments, magnificent buildings and
              countless dazzling skyscrapers.
            </p>

            <footer className={module.card__meta} role="contentinfo">
              <span className={module.card__postDate}>6 min ago</span>
              <span className={module.card__comments}>39 comments</span>
            </footer>
          </div>
        </article>
      </Aux>
    );
  }
}

Card.propTypes = {
  edges: PropTypes.string,
  // 'straight' | 'rounded' | 'curved'
};

export default Card;
