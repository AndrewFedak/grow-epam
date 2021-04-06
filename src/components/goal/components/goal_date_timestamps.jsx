import React from 'react';
import {timestampsConfig} from '../constants/configs';

const GoalDateTimestamps = ({goalDetails, changeTimestamp}) => (
    <div className='goal-details-timestamps'>
        {timestampsConfig.map(({name, label}, idx) => (
            <div key={idx} className={name}><div className={name+'-circle circle'}></div><span>{label}:</span> 
                <input
                    type='date'
                    defaultValue={goalDetails[name]}
                    name={name}
                    onChange={({target : {name, value}}) => changeTimestamp(name, value)}
                />
            </div>
        ))}
    </div>
)

export default GoalDateTimestamps;