import React, {useState} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Select from '../../../reusable/select';
import EditInput from '../../../reusable/edit_input';
import addActionItm from '../../../images/add-action-itm.png';

import {getGoalHeaderConfig} from '../../dashboard/reducer/helper';
import {changeGoalStatus, deleteGoal, renameGoal} from '../../dashboard/reducer/actions';

const GoalHeader = (props) => {
    const {
        goal,
        renameGoal,
        deleteGoal,
        changeGoalStatus,
        showHideGoal,
        isGoalCollapsed
    } = props;

    const {id, modifiers} = goal;

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
        changeGoalStatus(id, modifiers.done ? 'planned' : 'done')
    }

    const toggleEditingGoalName = (e) => {
        e.stopPropagation();
        toggleEditingName(true)
    }

    return (
        <div className='goal-header'>
            <div className='done-checkbox'>
                <input
                    type='checkbox'
                    checked={modifiers.done}
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
                <div onClick={() => showHideGoal(!isGoalCollapsed)} >
                    <p>{goal.title}<button onClick={toggleEditingGoalName}>✎</button></p>
                </div>
            )}
            </div>
            {isGoalCollapsed && <img src={addActionItm} alt='Add action item' className='goal-header-icon' />}
            {selectsConfig.map((config, idx) => <Select {...goal} {...config} isGoalCollapsed={isGoalCollapsed} key={idx}/>)}
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