import React, { useState, useEffect } from "react";
import {useForm} from '../hooks/useForm'
// import {useDarkMode} from '../hooks/useDarkMode'

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, values, handleChanges, handleSubmit] = useForm(initialValue)
  // const [darkMode, setDarkMode] = useDarkMode();
  // let item = null;
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [values, setValues] = useState(initialValue);

  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowSuccessMessage(true);
  // };

//   const [storedValue, setStoredValue] = useState(() => {
//     const item = window.localStorage.getItem('enabled');
//     console.log(item)
//     return item.value
//  })

// useEffect(()=>{
//    item = darkMode;
// },[darkMode])
// const [storedValue, setStoredValue] = useState(false)


  // const setValue = value => {
  //   setStoredValue(value);
  //   window.localStorage.setItem(key, JSON.stringify(value));
  // };


  return (
    <>
      <form className={"form"} onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={values.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={values.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={handleChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
