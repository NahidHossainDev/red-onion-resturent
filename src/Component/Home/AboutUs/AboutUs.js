import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { faBus, faBell, faTruck } from '@fortawesome/free-solid-svg-icons'
import AboutsCart from './AboutsCart';

const AboutUs = () => {
    const data = [
      {
        img:"https://i.postimg.cc/QM4wbFCf/adult-blur-blurred-background-687824.png",
        icon: faBus,
        title: "Fast Delivery",
      },
      {
        img: "https://i.postimg.cc/XYxzjrfn/chef-cook-food-33614.png",
        icon: faBell,
        title: "A good auto response",
      },
      {
        img:"https://i.postimg.cc/BnJzfT1h/architecture-building-city-2047397.png",
        icon: faTruck,
        title: "Home delivery",
      },
    ];
    return (
      <Container>
        <h1>Why choose us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eius
          officia porro.
          <br /> Sapiente temporibus nemo quisquam ea, quas neque corrupti.
        </p>
        <Grid container>
          {data.map((d, i) => (
            <AboutsCart data={d} key={i} />
          ))}
        </Grid>
      </Container>
    );
};

export default AboutUs;