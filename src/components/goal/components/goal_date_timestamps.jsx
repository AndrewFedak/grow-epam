import React from 'react';
import {timestampsConfig} from '../constants/configs';

const GoalDateTimestamps = ({goalDetails, changeTimestamp}) => (
    <div className='goal-details-timestamps'>
        {timestampsConfig.map(({name, label}, idx) => (
            <label key={idx}>{label}: 
                <input
                    type='date'
                    defaultValue={goalDetails[name]}
                    name={name}
                    onChange={({target : {name, value}}) => changeTimestamp(name, value)}
                />
            </label>
        ))}
    </div>
)

export default GoalDateTimestamps;