import React, {useState} from 'react';

import EditInput from '../../../reusable/edit_input';

const GoalSuccessCriteria = (props) => {
    const {
        deleteCriteria,
        renameCriteria,
        toggleCriteriaСompletion,
        createCriteria,
        goalDetails
    } = props;

    const {successCriteria} = goalDetails;
    const [isCreatingCriteria, toggleCriteriaCreating] = useState(false);

    const Criteria = ({isCompleted, title, id:criteriaId}) => {
        const [isEditingCriteria, showHideEditing] = useState(false);
        return (
            <div className='success-criteria'>
                {isEditingCriteria ? (
                    <EditInput
                        title={title}
                        applyFieldName={(title) => renameCriteria(criteriaId, title)}
                        endEditing={() => showHideEditing(false)}
                        placeholder='Type success criteria'
                        showActionButtons
                    />
                ) : (
                    <>
                        <input type='checkbox' checked={isCompleted} onChange={() => toggleCriteriaСompletion(criteriaId)}/>
                        <p className='success-criteria-title'>{title}</p>
                        <div className='success-criteria-actions'>
                            <button onClick={() => showHideEditing(true)}>✎</button>
                            <button onClick={() => deleteCriteria(criteriaId)}>🗑</button>
                        </div>
                    </>
                )}
            </div>
        )
    };

    return (
        <div className='criterias'>
            <div className='criterias-title'>
                <p>SUCCESS CRITERIA</p>
                <button onClick={() => toggleCriteriaCreating(true)}>Add criteria</button>
            </div>
            {successCriteria.map((criteria, idx) => <Criteria {...criteria} key={idx} />)}
            {isCreatingCriteria && (
                <EditInput
                    applyFieldName={(title) => createCriteria(title)}
                    endEditing={() => toggleCriteriaCreating(false)}
                    placeholder='Type success criteria'
                    showActionButtons
                />
            )}
        </div>
    )
}

export default GoalSuccessCriteria;