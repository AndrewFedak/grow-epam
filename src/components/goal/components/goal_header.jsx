import React, {useState} from 'react';

import Select from '../../../reusable/select';
import EditInput from '../../../reusable/edit_input';

import {getGoalHeaderConfig} from '../../goal_categories/reducer/helper';

const GoalHeader = (props) => {
    const {
        goal,
        renameGoal,
        deleteGoal,
        changeGoalStatus,
        showHideGoal,
        isGoalCollapsed
    } = props;

    const [isEditingName, toggleEditingName] = useState(false);

    const selectsActions = {
        statusSelect: (status) => changeGoalStatus(status),
        moreActions: (actionName) => {
            switch(actionName) {
                case 'EDIT_GOAL_NAME':
                    toggleEditingName(true);
                    break;
                case 'ADD_ACTION_ITEM':
                    console.log('add action item');
                    break;
                case 'ARCHIVE_GOAL':
                    console.log('ARCHIVE_GOAL');
                    break;
                case 'DELETE_GOAL':
                    deleteGoal()
                    break;
                default:
                    break;
            }
        }
    }

    const selectsConfig = getGoalHeaderConfig(goal, selectsActions);

    return (
        <div className='goal-header'>
            <div className='done-checkbox'>
                <input type='checkbox' />
            </div>
            <div className='goal-title'>
            {isEditingName ? (
                <EditInput
                    applyFieldName={(title) => renameGoal(title)}
                    endEditing={() => toggleEditingName(false)}
                    title={goal.title}
                />
            ) : (
                <>
                    <button onClick={() => toggleEditingName(true)}>✎</button>
                    <span onClick={() => showHideGoal(!isGoalCollapsed)}>{goal.title}</span>
                </>
            )}
            </div>
            {isGoalCollapsed && <div>Add action item</div>}
            {selectsConfig.map((config, idx) => <Select {...config} key={idx}/>)}
        </div>
    )
}

export default GoalHeader;