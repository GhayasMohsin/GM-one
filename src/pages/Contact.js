import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <h2>Contact Here</h2>
      <form>
        <label>Email:</label>
        <input type='email' />
        <label>Password:</label>
        <input type='password' />
        <button>SignUp</button>
      </form>
    </React.Fragment>
  );
};

export default Contact;
