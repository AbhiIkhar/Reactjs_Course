// import React from "react";
// import { useFormik } from "formik";

// const SignupForm = () => {
//   // Pass the useFormik() hook initial form values and a submit function that will
//   // be called when the form is submitted
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//     },
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default SignupForm;

import React from "react";

const SignInForm = ({ isOpen, onClose }) => {
  return (
    <div className={`sign-in-form ${isOpen ? "open" : ""}`}>
      <h2>Sign In</h2>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <form>
        <label>
          Username:
          <input type="text" name="username" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignInForm;
