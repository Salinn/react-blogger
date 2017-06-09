//React
import React from 'react';
import {} from 'prop-types';
//Components
import TextInput from '../common/TextInput';
//Styling
import { Button, Form, FormGroup, Col, } from 'reactstrap';

const Search = ( { search, inputValueChanged } ) => {
    return (
        <Form noValidate={true}>
            { search.textInputFields.map ( field => {
                let fieldInfo = {...field, ...search.fields[field.name]};
                return ( <TextInput key={field.name} fieldInfo={ fieldInfo } inputValueChanged={inputValueChanged} /> );
            })}

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