import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Toast from "react-bootstrap/Toast";
import Form from "react-bootstrap/Form";

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
const Formx = () => {
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
    <Card className="float-left">
      <div className="Form">
        <Card.Header>
          <Card.Title>Sign Up</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            to become a member of our community
          </Card.Subtitle>
        </Card.Header>

        <Card.Body>
          <div className="inputs">
            <form onSubmit={handleSubmit(submitForm)}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  placeholder="First Name..."
                  {...register("firstname")}
                />
              </Form.Group>
              <p>{errors.firstname?.message}</p>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  placeholder="Last Name..."
                  {...register("lastname")}
                />
                <p>{errors.lastname?.message}</p>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Email..."
                  {...register("email")}
                />
                <p>{errors.email?.message}</p>
              </Form.Group>
              <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="text"
                  name="age"
                  placeholder="Age"
                  {...register("age")}
                />
                <p>{errors.age?.message}</p>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  {...register("password")}
                />
                <p>{errors.password?.message}</p>
              </Form.Group>

              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                />
                <p>{errors.confirmPassword && "password does not match!"}</p>
              </Form.Group>

              <Button type="submit" id="submit">
                Submit
              </Button>
            </form>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

export default Formx;
