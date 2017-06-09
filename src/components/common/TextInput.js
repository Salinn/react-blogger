//React
import React from 'react';
import {} from 'prop-types';
//Components

//Styling
import { FormGroup, Label, Input, Col, Popover, PopoverTitle, PopoverContent } from 'reactstrap';

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
                           onChange={inputValueChanged}
                           required={fieldInfo.required}
                           pattern={fieldInfo.pattern}
                    />
                </Col>
            </FormGroup>
            <Popover placement='right' isOpen={fieldInfo.isError} target={fieldInfo.id} >
                <PopoverTitle>Error!</PopoverTitle>
                <PopoverContent>{fieldInfo.errorMessage}</PopoverContent>
            </Popover>
        </div>

    );
};

TextInput.propTypes = {};

export default TextInput