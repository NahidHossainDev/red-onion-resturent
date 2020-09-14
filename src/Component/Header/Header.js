import React from 'react';
import Container from '@material-ui/core/Container';
import { AppBar, useScrollTrigger, Slide, CssBaseline, Toolbar, Button } from '@material-ui/core';
import logo from '../images/logo2.png'
import { makeStyles } from "@material-ui/core/styles";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import { Link } from 'react-router-dom';


const HideOnScroll = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
        <Slide appear = {false} direction = 'down' in={!trigger}>
            {children}
       </Slide>
    );
};

export default function HideAppBar(props) {
    const useStyles = makeStyles({
        logo: {
         maxWidth: 160,
        },
        appBar:{
          background: 'white',
          boxShadow: 'none'
        },
        cartIcon: {
          color: 'black',
          marginLeft: 'auto',
          marginRight:'30px',
        },
        button: {
          borderRadius:'60px',
          marginLeft:'20px',
      },
    });
    const classes = useStyles();
    return (
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar className={classes.appBar}>
            <Container>
              <Toolbar>
                <Link to='/home'><img className={classes.logo} src={logo} alt="logo" /></Link>
                <ShoppingBasketOutlinedIcon
                  className={classes.cartIcon}
                ></ShoppingBasketOutlinedIcon>
                <Button>Log in</Button>
                <Button className={classes.button} variant="contained" color="secondary">
                  Sign up
                </Button>
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>
      </React.Fragment>
    );
}