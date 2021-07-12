import React, { useEffect, useContext } from 'react';
import { ContextElement } from '../../App';

const Cart = (props) => {
  const [foodCart, setFoodCart] = useContext(ContextElement);

    const formattingNum = (num) => {
      const number = num.toFixed(2);
      return Number(number);
    };

    const subTotalBeforeFormate = foodCart.reduce((total, item) => total+ (item.price * item.count) , 0)
    const subTotal = formattingNum(subTotalBeforeFormate);
    const taxBeforeFormate = (subTotal / 100) * 2;
    const tax = formattingNum(taxBeforeFormate);

    let deliveryFee = 15;
    if (subTotal > 100) { deliveryFee = 10 }
    if (subTotal > 200) { deliveryFee = 5 }
    if (subTotal > 250) { deliveryFee = 0 }

    const grandTotalBeforeFormate = (subTotal + tax + deliveryFee);
    const grandTotal = formattingNum(grandTotalBeforeFormate)

    const style = {
        td: {
            marginLeft:'auto',
        },
        table: {
            width:'100%'
        }
    }
    return (
      <div>
        <table style={style.table}>
          <tbody>
            <tr>
              <td>Subtotal:</td>
              <td style={style.td}>$ {subTotal}</td>
            </tr>
            <tr>
              <td>Tax:</td>
              <td>$ {tax}</td>
            </tr>
            <tr>
              <td>Delivery fee:</td>
              <td>$ {deliveryFee}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>$ {grandTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default Cart;