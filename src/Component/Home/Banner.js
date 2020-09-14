import React from 'react';
import backgroundImage from '../images/bannerbackground.png'
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core';


const useStyle = makeStyles({
  button: {
    borderRadius: "50px",
    height: "100%",
    width: "20%",
    marginLeft: '1%',
  },
  div1: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center center",
    backgroundSize: "110%",
    height: "500px",
    marginTop: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  div2: {
    textAlign: "center",
  },
  form: {
    backgroundColor: "lightgray",
    height: "50px",
    borderRadius: "50px",
  },
  searchBox: {
    height: "100%",
    width: "77%",
    marginLeft: 'auto',
    margin: '0 2%',
    padding:'2% 3%'
  },
});

const Banner = () => {
    const classes = useStyle();
  
    return (
      <div className={classes.div1}>
        <div className={classes.div2}>
          <h1>Best food waiting for your bally</h1>
          <form className={classes.form}>
            <TextField
              className={classes.searchBox}
              placeholder="        Search"
            ></TextField>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              type="submit"
            >
              Search
            </Button>
          </form>
        </div>
      </div>
    );
};

export default Banner;