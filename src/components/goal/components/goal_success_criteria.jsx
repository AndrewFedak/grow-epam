import React, {useState} from 'react';

import EditInput from '../../../reusable/edit_input';

const GoalSuccessCriteria = (props) => {
    const {
        deleteCriteria,
        renameCriteria,
        toggleCriteriaСompletion,
        criteria
    } = props;

    const {
        isCompleted,
        title,
        id:criteriaId,
    } = criteria;

    const [isEditingCriteria, showHideEditing] = useState(false);

    return (
        <div className='success-criteria'>
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
}

export default GoalSuccessCriteria;