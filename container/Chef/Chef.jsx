import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Your Home. Our Care.</p>
        </div>
        <p className="p__opensans"> No job is too big or too small for our team of highly skilled professionals and we can undertake any size of commercial or residential job. </p>
      
      </div>

      <div className="app__chef-sign">
        <p>Thai Viet</p>
        <p className="p__opensans">Founder of Thai Viet </p>
      </div>
    </div>
  </div>
);

export default Chef;