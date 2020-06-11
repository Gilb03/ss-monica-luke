import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Contact extends React.Component {
  render() {
    return (
      <Form>
        <h1>This product is on hold</h1>
        <h4>Google Maps Placeholder</h4>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="Email" placeholder="Enter your email" />
        </FormGroup>
        
        <FormGroup>
          <Label for="exampleText">Message</Label>
          <Input type="textarea" placeholder="please write your message here"name="text" id="exampleText" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}