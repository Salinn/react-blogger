//React
import React from 'react';
import {} from 'prop-types';
//Components

//Styling
import { FormGroup, Label, Input, Col, } from 'reactstrap';

const TextInput = ( { fieldInfo, inputValueChanged } ) => {
    return (
        <div>
            <FormGroup row>
                <Label for={fieldInfo.name} sm={2}>{ fieldInfo.label }</Label>
                <Col sm={4}>
                    <Input id={fieldInfo.id}
                           name={fieldInfo.name}
                           type={fieldInfo.type}
                           placeholder={fieldInfo.placeholder}
                           value={fieldInfo.value}
                           onChange={inputValueChanged}
                           required={fieldInfo.required}
                           pattern={fieldInfo.pattern}
                    />
                    {fieldInfo.isError ? <p>{fieldInfo.errorMessage}</p> : null}
                </Col>
            </FormGroup>
        </div>

    );
};

TextInput.propTypes = {};

export default TextInput