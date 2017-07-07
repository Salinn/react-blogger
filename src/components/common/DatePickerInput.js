//React
import React from 'react';
import { object, func } from 'prop-types';
//Components
//Styling
import { FormGroup, Label, Input, Col, FormFeedback, } from 'reactstrap';

const TextInput = ( { fieldInfo, inputValueChanged } ) => {
    return (
        <FormGroup row color={fieldInfo.isError ? 'danger' : null}>
            <Label for={fieldInfo.name} sm={2}>{ fieldInfo.label }</Label>
            <Col sm={4}>
                <Input id={fieldInfo.id}
                       name={fieldInfo.name}
                       type="password"
                       value={fieldInfo.value}
                       onKeyPress={inputValueChanged}
                       required={fieldInfo.required}
                       pattern={fieldInfo.pattern}
                       state={fieldInfo.isError ? 'danger' : null}
                />
                {fieldInfo.isError ? <FormFeedback>{fieldInfo.errorMessage}</FormFeedback> : null}
            </Col>
        </FormGroup>
    );
};

TextInput.propTypes = {
    fieldInfo: object,
    inputValueChanged: func,
};

export default TextInput