import React, { useContext, useState } from 'react';
import { Container, Grid,Box, Button, } from '@material-ui/core';
import './DeliveryDetail.css';
import { ContextElement } from '../../App';
import allFoods from '../fakeData';
import DeliveryDetailitem from '../DeliveryDetailItem/DeliveryDetailitem';
import Cart from '../Cart/Cart';
import DeliveryForm from './DeliveryForm';
import { useHistory } from 'react-router-dom';

const CheckOutDetail = () => {
  const [clientData, setClientData] = useState();

  const [foodCart, setFoodCart] = useContext(ContextElement);

  const removeToCart = (id) => {
    const remainItem = foodCart.filter((food) => food.id !== id);
    setFoodCart(remainItem);
  };

  const history = useHistory();
  const handleForEndPage = () => {
    history.push("/finishCheckout");
  }
  const style = {
    boxStyle: {
      margin: "100px 50px 50px 50px",
      padding: "0 40px",
      textAlign: "start",
      width:'400px',
    },
    placeBtn: {
      width:'100%'
    }
  }
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box style={style.boxStyle}>
              <DeliveryForm setClientData={setClientData}></DeliveryForm>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box style={style.boxStyle}>
              <span>
                From
                <h4 style={{ display: "inline-block" }}>
                  Gulshan Pasta Restaurant
                </h4>
                GPR
              </span>
              <p>Arriving 20-30 min</p>
              <div>
                {foodCart.map((f, i) => (
                  <DeliveryDetailitem
                    food={f}
                    handleRemove={removeToCart}
                  ></DeliveryDetailitem>
                ))}
              </div>
              <Cart cartItem={foodCart}></Cart>
              <Button
                style={style.placeBtn}
                variant="contained"
                color="secondary"
                disabled={clientData === undefined}
                onClick= {handleForEndPage}
              >
                Place Order
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
};

export default CheckOutDetail;