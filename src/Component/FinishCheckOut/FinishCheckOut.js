import React, { useContext } from 'react';
import { Grid, Box } from '@material-ui/core';
import map from '../images/map.png'
import bike from '../images/bike.png'
import Rider from '../images/your_rider.png'
import './FinishCheckOut.css'
import { ContextElement } from '../../App';

const FinishCheckout = () => {
   const [
     addedFoodToCart,
     setAddedFoodToCart,
     address
   ] = useContext(ContextElement);
   
  const nowTime = new Date(Date.now() + 35 * 60 * 1000);
  const h = nowTime.getHours();
  const m = nowTime.getMinutes()

    return (
      <div style={{ marginTop: "100px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} className="map">
            <img src={map} alt="" />
          </Grid>
          <Grid item xs={12} sm={2} className="detail">
            <Box p="2">
              <img src={bike} alt="" className="bike" />
              <div className="location">
                <ul>
                  <li style={{ padding: "0" }}>Your location</li>
                  <p>{address}</p>
                  <li>Shop Address</li>
                  <p>
                    Gulshan Pasta Restaurant. GPR
                  </p>
                </ul>
              </div>
              <h2 id="es-time">
                {h}:{m}
              </h2>
              <small>Estimated Time</small>
              <div className="rider">
                <Grid container>
                  <Grid items>
                    <img src={Rider} alt="" />
                  </Grid>
                  <Grid items>
                    <div className="rider-name">
                      <h4>Hamim</h4>
                      <small>Your Rider</small>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
};

export default FinishCheckout;