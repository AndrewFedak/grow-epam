import React, {useEffect, useRef} from 'react';

import useOutsideClick from './clickOutside';

const EditInput = (props) => {
    const {
        title,
        renameField,
        endEditing
    } = props;

    const nameInputRef = useRef();

    useOutsideClick(nameInputRef, () => {
        if(nameInputRef.current.value.trim()) {
            renameField(nameInputRef.current.value)
            endEditing();
        }
    })

    useEffect(() => {
        nameInputRef.current && nameInputRef.current.select()
    }, [])

    return (
        <input type='text' ref={nameInputRef} defaultValue={title} />
    )
}

export default EditInput;