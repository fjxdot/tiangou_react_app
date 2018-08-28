import React, { Component } from 'react';
import { Alert,Navbar,Nav,NavItem,NavDropdown,MenuItem,FormGroup,FormControl,Col,ControlLabel,Button,Jumbotron,HelpBlock, Form, Checkbox} from 'react-bootstrap';

class FormComponets extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: 'aaaa'
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col smOffset={3} componentClass={ControlLabel} sm={2}>
                        username
                    </Col>
                    <Col sm={3}>
                        <FormControl type="string" placeholder="username" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col smOffset={3} componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={3}>
                        <FormControl type="password" placeholder="Password" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={5} sm={10}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={6} sm={10}>
                        <Button type="submit" href={this.state.value} onClick={() => {
                            alert('!!!!!!!!!!!!!!!' + this.state.value)
                            window.location.href ='http://www.baidu.com'
                        }}>Sign in</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default FormComponets;