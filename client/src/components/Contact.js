import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Row, Col } from "reactstrap";
import Maps from "./Maps";
import axios from "axios";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      number: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    console.log("submit event");
    e.preventDefault();
    const { name, email, message } = this.state;

    this.setState({ name: "", email: "", message: "", number: "" }, () => {
      console.log("sdds");
    });
    const form = await axios.post("/api/form", {
      name,
      email,
      message,
    });
  };

  render() {
    return (
      <div>
        <br />
        <h1 className="subtitle ">
          <a
            target="blank"
            href="https://drive.google.com/file/d/1kbMPhA9SPZkT_IxsZLk631mhVQcHyRKT/view?usp=sharing"
          >
            View Resume
          </a>{" "}
          or Contact Me
        </h1>
        <Form className="contact contact-form" onSubmit={this.handleSubmit}>
          <br />
          <br />
          <FormGroup>
            <Input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              style={{ fontSize: "15px" }}
              onChange={this.handleChange}
              value={this.state.name}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              style={{ fontSize: "15px" }}
              onChange={this.handleChange}
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="number"
              placeholder="Enter Mobile Number"
              style={{ fontSize: "15px" }}
              onChange={this.handleChange}
              value={this.state.number}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="textarea"
              name="message"
              placeholder="Enter Your Message"
              className="contact-det"
              style={{ fontSize: "15px", height: "100px" }}
              onChange={this.handleChange}
              value={this.state.message}
            />
          </FormGroup>

          <Button className="float-right" color="primary" size="lg">
            Send Message
          </Button>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
