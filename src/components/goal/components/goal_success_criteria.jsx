import React, {useState} from 'react';

import EditInput from '../../../reusable/edit_input';

const GoalSuccessCriteria = (props) => {
    const {
        deleteCriteria,
        renameCriteria,
        toggleCriteriaСompletion,
        createCriteria,
        goalDetails: {successCriteria}
    } = props;

    const [isEditingCriteria, showHideEditing] = useState(false);

    const [isCreatingCriteria, toggleCriteriaCreating] = useState(false);

    const renderCriteria = ({isCompleted, title, id:criteriaId}) => (
        <div className='success-criteria' key={criteriaId}>
            <input type='checkbox' checked={isCompleted} onChange={() => toggleCriteriaСompletion(criteriaId)}/>
            {isEditingCriteria ? (
                <EditInput
                    title={title}
                    applyFieldName={(title) => renameCriteria(criteriaId, title)}
                    endEditing={() => showHideEditing(false)}
                    showActionButtons
                />
            ) : (
                <>
                    <p className='success-criteria-title'>{title}</p>
                    <div className='success-criteria-actions'>
                        <button onClick={() => showHideEditing(true)}>✎</button>
                        <button onClick={() => deleteCriteria(criteriaId)}>🗑</button>
                    </div>
                </>
            )}
        </div>
    )

    return (
        <div className='criterias'>
            <div className='criterias-title'>
                <p>success criteria</p>
                <button onClick={() => toggleCriteriaCreating(true)}>create criteria</button>
            </div>
            {successCriteria.map(renderCriteria)}
            {isCreatingCriteria && (
                <EditInput
                    applyFieldName={(title) => createCriteria(title)}
                    endEditing={() => toggleCriteriaCreating(false)}
                    showActionButtons
                />
            )}
        </div>
    )
}

export default GoalSuccessCriteria;