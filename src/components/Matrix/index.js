import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Equation from './Equation';
import { init } from './script';
import './style.scss';

class Matrix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialized: false,
      degree: 4,
      m: 2,
      h: 1
    };
  }

  handleChange = e => {
    if (e.target.value >=1 && e.target.value <= 4) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    
    this.setState({
      initialized: true
    }, () => {
      init(this.state.degree, this.state.m, this.state.h);
    });
  };

  handleReset = e => {
    this.setState({
      initialized: false,
      degree: 4,
      m: 2,
      h: 1
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="equation">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="degree">Degree</Label>
              <Input
                type="number"
                name="degree"
                id="degree"
                placeholder="Degree"
                value={this.state.degree}
                step={1}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="m">M</Label>
              <Input
                type="number"
                name="m"
                id="m"
                placeholder="M"
                value={this.state.m}
                step={1}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="h">H</Label>
              <Input
                type="number"
                name="h"
                id="h"
                placeholder="H"
                value={this.state.h}
                step={1}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button color="primary">Initialize</Button>{' '}
            <Button type="button" onClick={this.handleReset}>Reset Defaults</Button>
          </Form>
          {this.state.initialized && (
            <div>
              <hr/>
              <Equation degree={this.state.degree} />
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Matrix;