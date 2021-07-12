import React from 'react';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import './FoodsItem.css';
import { Link } from 'react-router-dom';

const FoodsItem = (props) => {
   
    const { title, p, price,img, id } = props.food
    return (
      <>
        <Grid item xs={12} sm={4}>
          <Link to={`/foodDetail/${id}`}>
            <Box className="box">
              <img src={img} className="foodImage" alt="" />
              <h5>{title}</h5>
              <p>{p}</p>
              <h2 className="price"> &#36; {price} </h2>
            </Box>
          </Link>
        </Grid>
      </>
    );
};

export default FoodsItem;