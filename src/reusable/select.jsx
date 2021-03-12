import React from 'react';

const Select = (props) => {
    const {
        options,
        onChange
    } = props;

    return (
        <div className='options'>
            {options.map((option, idx) => (
                <div className={'option option--' + (option.backgroundColor || '')}
                    key={idx}
                    onClick={() => onChange(option)}
                >{option.optionName}</div>
            ))}
        </div>
    )
}

export default Select;