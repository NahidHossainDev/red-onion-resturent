import React from 'react';

const Cart = (props) => {
    const cartItem = props.cartItem;

    let subTotal = 0;
    cartItem.map(item => {
        return subTotal = subTotal + (item.price * item.count);
    })

    return (
      <div>
        <table>
          <tr>
            <td>Subtotal:</td> 
                    <td>${subTotal}</td>
          </tr>
          <tr>
            <td>Tax:</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>Delivery fee:</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>$0</td>
          </tr>
        </table>
      </div>
    );
};

export default Cart;