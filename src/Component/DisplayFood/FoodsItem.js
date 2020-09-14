import React from 'react';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import './FoodsItem.css';
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import { Link } from 'react-router-dom';

const FoodsItem = (props) => {

   
    const { title, p, price,img, id } = props.food
    return (
      <>
        <Grid item xs={12} sm={4}>
          <Link to={`/foodDetail/${id}`}>

          <Box
            className="box"
            p={1}
            m={4}
            onClick={() => props.handle(props.food)}
          >
            <img src={img} className="foodImage" alt="" />
            <h5>{title}</h5>
            <p>{p}</p>
            <p>
              <h2 className="price">
                <AttachMoneyRoundedIcon
                  style={{ marginTop: "5px" }}
                ></AttachMoneyRoundedIcon>
                {price}
              </h2>
            </p>
          </Box>
          </Link>
        </Grid>
      </>
    );
};

export default FoodsItem;