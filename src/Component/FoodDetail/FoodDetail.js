import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@material-ui/core';
import allFoods from '../fakeData';
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import { ContextElement } from '../../App';
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";


const FoodDetail = () => {
    const { id } = useParams()
  const food = allFoods.find(f => f.id == id)
  console.log(food)
    const [foodCart, setFoodCart] = useContext(ContextElement);
    
    const [count, setCount] = useState(1)
    const totalPrice = (count*food.price).toFixed(2)

  const addToCart = (food) => {
    const item = {
      title: food.title,
      img: food.img,
      p: food.p,
      id: food.id,
      price:food.price,
      count: count,
    }
    setFoodCart([...foodCart, item])
  }

  const removeToCart = () => {
    const remainItem = foodCart.filter(f => f.id !== food.id);
    setFoodCart(remainItem);
  }

  const style = {
    boxStyle: {
      margin: "100px 50px 50px 50px",
      padding: "20px",
      textAlign: "start",
    },
    btnStyle: {
      height: "30px",
      width: "30px",
      borderRadius: "50px",
    },
    countContainer: {
      display: "inline-block",
      border: "1px solid lightGray",
      borderRadius: "50px",
      marginLeft: "50px",
    },
    h2: {
      display: "inline-block",
      margin: "0",
    },
    spanText: {
      fontSize: "30px",
    },
    shoppingIcon: {
      marginRight: "10px",
    },
    addBtn: {
      borderRadius: "50px",
      marginTop: "30px",
      marginRight: '20px'
    },
    moreBtn: {
      borderRadius: "50px",
      marginTop: "100px",
      marginRight: "50px",
    },
  };
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box style={style.boxStyle}>
              <h1>{food.title} </h1>
              <p style={{ color: "gray" }}>{food.p}</p>
              <div>
                <h2 className="price" style={style.h2}>
                  <AttachMoneyRoundedIcon
                    style={{ marginTop: "5px" }}
                  ></AttachMoneyRoundedIcon>
                  <span style={style.spanText}> {totalPrice}</span>
                </h2>
                <div style={style.countContainer}>
                  <Button
                    style={style.btnStyle}
                    onClick={() => setCount(count - 1)}
                    disabled={count < 2}
                  >
                    -
                  </Button>
                  {count}
                  <Button
                    style={style.btnStyle}
                    color="secondary"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={style.addBtn}
                    onClick={()=> addToCart(food)}
                  >
                    <ShoppingBasketOutlinedIcon style={style.shoppingIcon} />
                    Add
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={style.addBtn}
                    onClick={removeToCart}
                  >
                    <RemoveCircleOutlineIcon style={style.shoppingIcon} />
                    Remove
                  </Button>
                </div>
                <Link to="/home">
                  <Button
                    variant="contained"
                    color="secondary"
                    style={style.moreBtn}
                  >
                    Add More
                  </Button>
                </Link>
                <Link to="/checkout">
                  <Button
                    variant="contained"
                    color="secondary"
                    style={style.moreBtn}
                    disabled={foodCart.length < 1}
                  >
                    Go for checkout
                  </Button>
                </Link>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              style={{
                margin: "100px 50px 50px 50px",
                padding: "20px",
                textAlign: "start",
              }}
            >
              <img src={food.img} alt="" style={{ width: "100%" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
};

export default FoodDetail;