//React
import React from 'react';
import {} from 'prop-types';
//Components
import TextInput from '../common/TextInput';
//Styling
import { Button, Form, FormGroup, Col, } from 'reactstrap';

const Search = ( { fields, inputValueChanged } ) => {
    const isError = fields.email !== undefined ? fields.email.isError : false;
    const errorMessage = fields.email !== undefined ? fields.email.errorMessage : '';
    const emailInfo = { id: '1', label: 'Email', name: 'email', type: 'email',  placeholder: 'johnSmith@gmail.com',
          isError: isError, errorMessage: errorMessage, required: true,
          pattern: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"};
    return (
        <Form>
            <TextInput fieldInfo={ emailInfo } inputValueChanged={inputValueChanged} />

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