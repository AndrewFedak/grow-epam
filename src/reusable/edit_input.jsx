import React, {useEffect, useRef} from 'react';

import useOutsideClick from './clickOutside';

const EditInput = (props) => {
    const {
        title = '',
        applyFieldName,
        endEditing,
        showActionButtons
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
            <input type='text' ref={nameInputRef} defaultValue={title} className='edit-input'/>
            {showActionButtons && (
                <>
                    <button onClick={() => applyChanges()}>tick</button>
                    <button onClick={() => endEditing()}>cross</button>
                </>
            )}
        </div>
    )
}

export default EditInput;