import React, {useState} from 'react';
import {goalStatuses, labels, editMenu} from '../reducer/constants';
import Select from '../../../reusable/select';

const Goal = (props) => {
    const {
        goal,
        toggleCollapseGoal
    } = props;

    const {title, actionItems, labelColor, status, id, isCollapsed, goalDetails} = goal;
    const {start, deadline, finish, successCriteria, attachments} = goalDetails;

    return (
        <div class='goal-wrapper'>
            <div className='goal-header'>
                <div className='done-checkbox'>
                    <input type='checkbox' />
                </div>
                <div onClick={() => toggleCollapseGoal()} className='goal-title'>
                    <span>{title}</span>
                </div>
                <div hidden={!isCollapsed}>Add action item</div>
                <div className={'goal-select label-select--' + labelColor.backgroundColor}>
                        <div>asd</div>
                        {/* <Select
                            options={labels}
                        /> */}
                </div>
                <div className={'goal-select'}>
                    <div>{status.optionName.toUpperCase()}</div>
                        {/* <Select
                            options={goalStatuses}
                        /> */}
                </div>
                <div className={'goal-select'}>
                    <div>:</div>
                    <Select
                        options={editMenu}
                    />
                </div>
                
            </div>
            {!isCollapsed && (
                <div>
                    <p>Start: <input type='date' value={start} /></p>
                    <p>Deadline: <input type='date' value={deadline} /></p>
                    <p>Finish: <input type='date' value={finish} /></p>
                    <hr />
                    {successCriteria.map((criteria, idx) => (
                        <div>
                            123
                        </div>
                    ))}
                    {attachments.map((criteria, idx) => (
                        <div>
                            123
                        </div>
                    ))}
                </div>
            )}
            <ul>
                {actionItems.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        </div>
    )
};

export default Goal;