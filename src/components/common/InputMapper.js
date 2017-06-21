//React
import React from 'react';
import { object, func } from 'prop-types';
//Components
import TextInput from './TextInput';
import DatePickerInput from './DatePickerInput';
import * as types from '../../utils/inputTypes';

const InputMapper = ( { fieldInfo, inputValueChanged } ) => {
    switch (fieldInfo.type) {
        case types.TEXT:
            return <TextInput fieldInfo={ fieldInfo } inputValueChanged={inputValueChanged} />;
        case types.DATEPICKER:
            return <DatePickerInput fieldInfo={ fieldInfo } inputValueChanged={inputValueChanged} />;
        default:
            return <TextInput fieldInfo={ fieldInfo } inputValueChanged={inputValueChanged} />;
    }
};

InputMapper.propTypes = {
    fieldInfo: object,
    inputValueChanged: func,
};

export default InputMapper