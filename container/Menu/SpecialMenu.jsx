import React from 'react';

import { SubHeading } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Services</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Commercial Painting</p>
      </div>
      <div className="app__specialMenu-image_wine">
        <img src={images.Fitouts} alt="Commercial Painting" />
        <p className="app__specialMenu-image_description">Description of Commercial Painting service.</p>
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Residential Painting</p>
      </div>
      <div className="app__specialMenu-image_wine">
        <img src={images.ResidentalPainting} alt="Residential Painting" />
        <p className="app__specialMenu-image_description">Description of Residential Painting service.</p>
      </div>

      <div className="app__specialMenu-menu_painter flex__center">
        <p className="app__specialMenu-menu_heading">Maintenance Painting</p>
      </div>
      <div className="app__specialMenu-image_wine">
        <img src={images.Maintenance} alt="Maintenance Painting" />
        <p className="app__specialMenu-image_description">Description of Maintenance Painting service.</p>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
