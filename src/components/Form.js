import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstname: yup.string().required("do not forget to state your name!"),
  lastname: yup.string().required("what about last name?"),
  email: yup.string().email().required(),
  age: yup
    .number("age is important")
    .min(13)
    .max(99)
    .required("age is important"),
  password: yup.string().min(4).max(20).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log("data", data);
  };
  return (
    <div className="Form">
      <div className="title">SignUp</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="text"
            name="firstname"
            placeholder="First Name..."
            {...register("firstname")}
          />
          <p>{errors.firstname?.message}</p>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name..."
            {...register("lastname")}
          />
          <p>{errors.lastname?.message}</p>
          <input
            type="text"
            name="email"
            placeholder="Email..."
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <input
            type="text"
            name="age"
            placeholder="Age"
            {...register("age")}
          />
          <p>{errors.age?.message}</p>
          <input
            type="text"
            name="password"
            placeholder="Password"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <input
            type="text"
            name="confirmPassword"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword && "password does not match!"}</p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
