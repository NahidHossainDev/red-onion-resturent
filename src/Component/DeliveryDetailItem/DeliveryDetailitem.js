import React, { useState, useContext, useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import { ContextElement } from '../../App';

const DeliveryDetailitem = (props) => {
  const [foodCart, setFoodCart] = useContext(ContextElement);
  
  const { count, img, title, price, id } = props.food;

   const [finalCount, setFinalCount] = useState(count);
  const totalForEachItem = finalCount * price;
  
  

    const style = {
      div1: {
        backgroundColor: "#f1f2f6",
        minHeight: "100px",
        borderRadius: "10px",
        padding: "10px",
        marginBottom:'15px'
      },
      countContainer: {
        display: "inline-block",
        border: "1px solid lightGray",
        borderRadius: "50px",
        marginLeft: "30px",
      },
      image: {
        width: "80px",
        height: "80px",
      },
      div2: {
        display: "inline-block",
        width: "100px",
        marginLeft: "20px",
      },
      h5: {
        margin: "0px ",
      },
      countForContainer: {
        display: "inline-block",
        border: "1px solid lightGray",
        borderRadius: "10px",
        marginLeft: "5px",
      },
      div3: {
        display: "inline-block",
        top:' 0px'
      },
      btnStyle2: {
        width: "30px",
        height: "30px",
        borderRadius: "50px",
        border: "none",
        background: "white",
        color: "red",
      },
      count: {
        padding: "5px",
      },
      p:{
        color: "red",
        marginTop: '0',
        cursor:'pointer'
      },
      span: {
        border: '1px solid black'
      }
    };
    return (
      <div style={style.div1}>
        <img style={style.image} src={img} alt="food img" />
        <div style={style.div2}>
          <h5 style={style.h5}>{title}</h5>
          <span>{totalForEachItem}</span>
        </div>
        <div style={style.div3}>
          <p style={style.p} onClick ={()=> props.handleRemove(id)}>
            <span style={style.span}>X</span> Remove</p>
          <div style={style.countForContainer}>
            <button
              style={style.btnStyle2}
              onClick={() => setFinalCount(finalCount - 1)}
              disabled={finalCount < 2}
            >
              -
            </button>
            <span style={style.count}> {finalCount}</span>
            <button
              style={style.btnStyle2}
              color="secondary"
              onClick={() => setFinalCount(finalCount + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
};

export default DeliveryDetailitem;