import React, { useContext, useState } from 'react';
import { Container, Grid,Box, } from '@material-ui/core';
import { useForm } from "react-hook-form";
import './DeliveryDetail.css';
import { ContextElement } from '../../App';
import allFoods from '../fakeData';
import DeliveryDetailitem from '../DeliveryDetailItem/DeliveryDetailitem';
import Cart from '../Cart/Cart';

const CheckOutDetail = () => {
  const [foodCart, setFoodCart] = useContext(ContextElement);
  console.log(foodCart);

  const removeToCart = (id) => {
    const remainItem = foodCart.filter((food) => food.id !== id);
    setFoodCart(remainItem);
  };
  const { register, handleSubmit,errors } = useForm();
  const onSubmit = (data) => console.log(data);
  
  const [cart, setCart] = useState()
  
  const style = {
    boxStyle: {
      margin: "100px 50px 50px 50px",
      padding: "0 40px",
      textAlign: "start",
      width:'400px',
    },
  }
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box style={style.boxStyle}>
              <h2>Edit Delivery Detail</h2>
              <hr />
              <form onSubmit={handleSubmit(onSubmit)} className="deliveryForm">
                <input
                  type="text"
                  placeholder="First name"
                  name="FirstName"
                  ref={register({ required: true, maxLength: 80 })}
                />
                {errors.FirstName && (
                  <span className="error">First name number is required</span>
                )}
                <input
                  type="text"
                  placeholder="Last name"
                  name="LastName"
                  ref={register({ required: true, maxLength: 100 })}
                />
                {errors.LastName && (
                  <span className="error">Last name is required</span>
                )}
                <input
                  type="text"
                  placeholder="Email"
                  name="Email"
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.Email && (
                  <span className="error">Email is required</span>
                )}
                <input
                  type="tel"
                  placeholder="Mobile number"
                  name="MobileNumber"
                  ref={register({
                    required: true,
                    minLength: 11,
                  })}
                />
                {errors.MobileNumber && (
                  <span className="error">Mobile number is required</span>
                )}
                <input
                  type="text"
                  placeholder="Address"
                  name="Address"
                  ref={register({ required: true, maxLength: 100 })}
                />
                {errors.Address && (
                  <span className="error">Address is required</span>
                )}

                <input
                  type="submit"
                  className="submitBtn"
                  value="Save & Continue"
                />
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box style={style.boxStyle}>
              <span>
                From{" "}
                <h4 style={{ display: "inline-block" }}>
                  Gulshan Pasta Restaurant
                </h4>{" "}
                GPR
              </span>
              <p>Arriving 20-30 min</p>
              <div>
                {foodCart.map((f) => (
                  <DeliveryDetailitem food={f} handleRemove ={removeToCart} ></DeliveryDetailitem>
                ))}
              </div>
              <div>
                <Cart cartItem={foodCart}></Cart>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
};

export default CheckOutDetail;