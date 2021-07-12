import React from 'react';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { ContextElement } from '../../App';

const DeliveryForm = (props) => {
  const [addedFoodToCart, setAddedFoodToCart, address, setAddress]= useContext(ContextElement)
   
  const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
      props.setClientData(data);
      console.log(data);
      setAddress(data.Address)
    };
    return (
      <div>
        <h2>Edit Delivery Detail</h2>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="deliveryForm">
          <input
            type="text"
            placeholder="First name"
            name="FirstName"
            ref={register({ required: true, maxLength: 80, minLength:3, })}
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
          {errors.Email && <span className="error">Email is required</span>}
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
          {errors.Address && <span className="error">Address is required</span>}

          <input type="submit" className="submitBtn" value="Save & Continue" />
        </form>
      </div>
    );
};

export default DeliveryForm;