import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Painter, the story about trusted master painters and resene eco-decorators</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}> We're not just passionate about painting – we're committed to preserving the planet for future generations. 
        As proud Resene Eco-Decorators, we prioritise environmentally friendly practices in every aspect of our work.</p>
      <button type="button" className="custom__button">Explore Options</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.painter} alt="header_img" />
    </div>
  </div>
);

export default Header;