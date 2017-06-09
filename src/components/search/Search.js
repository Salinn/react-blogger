//React
import React from 'react';
import {} from 'prop-types';
//Components

//Styling
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

const Search = ( { inputValueChanged } ) => {
    return (
        <Form>
            <FormGroup row>
                <Label for="exampleEmail" sm={2}>Email</Label>
                <Col sm={10}>
                    <Input type="email"
                           name="email"
                           id="exampleEmail"
                           placeholder="with a placeholder"
                           onChange={inputValueChanged}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="examplePassword" sm={2}>Password</Label>
                <Col sm={10}>
                    <Input type="password"
                           name="password"
                           id="examplePassword"
                           placeholder="password placeholder"
                           onChange={inputValueChanged}
                    />
                </Col>
            </FormGroup>
            <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                </Col>
            </FormGroup>
        </Form>
    );
};

Search.propTypes = {};

export default Search