import React from 'react';
import { Grid, Container } from '@material-ui/core';
import logo from '../../images/logo.png'
import "./Footer.css"
const Footer = () => {
    return (
      <div className="footer">
        <Container>
          <Grid container direction="row">
            <Grid item xs={6}>
              <img src={logo} alt="" />
              <p className="copyright">
                Copyright &#169; {new Date().getFullYear()} online food
              </p>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="row">
                <Grid item xs={6}>
                  <ul>
                    <li>
                      <a href="#aboutFood">About our food</a>
                    </li>
                    <li>
                      <a href="#readBlock">Read Block</a>
                    </li>
                    <li>
                      <a href="#signUpDeliver">Sign Up to deliver</a>
                    </li>
                    <li>
                      <a href="#addRestaurant">Add your restaurant</a>
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={6}>
                  <ul>
                    <li>
                      <a href="#aboutFood">Get help</a>
                    </li>
                    <li>
                      <a href="#faq">Read FAQ</a>
                    </li>
                    <li>
                      <a href="#viewSite">View all sites</a>
                    </li>
                    <li>
                      <a href="#res">Restaurant near me</a>
                    </li>
                  </ul>
                </Grid>
                <p className="privacy-terms">
                  <a href="privacy">Privacy Policy</a>
                  <a href="terms">Terms of use </a>
                  <a href="price">Pricing</a>
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
};

export default Footer;