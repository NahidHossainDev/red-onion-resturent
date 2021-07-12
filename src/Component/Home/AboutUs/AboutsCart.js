import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Grid, Box } from '@material-ui/core';
import './AboutsCart.css'
const AboutsCart = (props) => {
    const { title, img, icon } = props.data
    
    return (
      <Grid item xs={4}>
        <Card style={{ margin: "10px" }}>
          <img src={img} alt="" style={{ height: "500px", width: "100%" }} />
          <Box p={3}>
            <Grid container direction="row">
              <Grid item xs={2}>
                <div className="iconDiv">
                  <FontAwesomeIcon icon={icon} className="icon" />
                </div>
              </Grid>
              <Grid item xs={9}>
                <h3 style={{ margin: "0px" }}>{title}</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat reprehenderit, sequi quia rerum neque commodi.
                </p>
                <span style={{color:'blue'}}>See more</span>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
    );
};

export default AboutsCart;