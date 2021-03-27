import React, {useEffect, useRef} from 'react';

import useOutsideClick from './clickOutside';

const EditInput = (props) => {
    const {
        title = '',
        applyFieldName,
        endEditing,
        showActionButtons,
        placeholder
    } = props;

    const nameInputRef = useRef();

    const applyChanges = () => {
        if(nameInputRef.current.value.trim()) {
            applyFieldName(nameInputRef.current.value)
            endEditing();
        }
    }

    useOutsideClick(nameInputRef, () => applyChanges());

    useEffect(() => {
        nameInputRef.current && nameInputRef.current.select()
    }, [])

    return (
        <div className='edit'>
            <input type='text' ref={nameInputRef} defaultValue={title} className='edit-input' placeholder={placeholder} />
            {showActionButtons && (
                <>
                    <button onClick={() => applyChanges()}>✓</button>
                    <button onClick={() => endEditing()}>✕</button>
                </>
            )}
        </div>
    )
}

export default EditInput;