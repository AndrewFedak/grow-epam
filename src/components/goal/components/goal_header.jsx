import React, {useState} from 'react';
import {connect} from 'react-redux';

import Select from '../../../reusable/select';
import EditInput from '../../../reusable/edit_input';

import {getGoalHeaderConfig} from '../../goal_categories/reducer/helper';
import {changeGoalStatus, deleteGoal, renameGoal} from '../../goal_categories/reducer/actions';
import { bindActionCreators } from 'redux';

const GoalHeader = (props) => {
    const {
        goal,
        renameGoal,
        deleteGoal,
        changeGoalStatus,
        showHideGoal,
        isGoalCollapsed
    } = props;

    const {id, status} = goal;

    const [isEditingName, toggleEditingName] = useState(false);

    const selectsActions = {
        statusSelect: (status) => changeGoalStatus(id, status),
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
                    deleteGoal(id)
                    break;
                default:
                    break;
            }
        }
    }

    const selectsConfig = getGoalHeaderConfig(goal, selectsActions);

    const toggleGoalStatus = () => {
        const newStatus = status.optionName === 'Done' ? 'Planned' : 'Done';
        changeGoalStatus(id, newStatus)
    }
    return (
        <div className='goal-header'>
            <div className='done-checkbox'>
                <input
                    type='checkbox'
                    checked={status.optionName === 'Done'}
                    onChange={() => toggleGoalStatus()}
                />
            </div>
            <div className='goal-title'>
            {isEditingName ? (
                <EditInput
                    applyFieldName={(title) => renameGoal(id, title)}
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteGoal,
        changeGoalStatus,
        renameGoal
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(GoalHeader);