import React, {useEffect, useState, useRef} from 'react';

import useOutsideClick from './clickOutside';

const EditInput = (props) => {
    const {
        title = '',
        applyFieldName,
        endEditing,
        showActionButtons,
        placeholder,
        closeOnBlur = true,
        isDisabled = false
    } = props;

    const inputRef = useRef();

    const [isFieldEmpty, setState] = useState(!title.trim());

    const applyChanges = () => {
        if(inputRef.current.value.trim()) {
            applyFieldName(inputRef.current.value)
            endEditing();
        }
    }

    useOutsideClick(inputRef, () => closeOnBlur && applyChanges());

    useEffect(() => {
        inputRef.current && inputRef.current.select()
    }, [])

    return (
        <div className='edit'>
            <input type='text'
                ref={inputRef}
                defaultValue={title}
                className='edit-input'
                placeholder={placeholder}
                onChange={({target: {value}}) => setState(!value.trim())}
            />
            {showActionButtons && (
                <div className='action-buttons'>
                    <button onClick={() => applyChanges()} disabled={isDisabled || isFieldEmpty} className='done' >✓</button>
                    <button onClick={() => endEditing()} className='cross'>✕</button>
                </div>
            )}
        </div>
    )
}

export default EditInput;