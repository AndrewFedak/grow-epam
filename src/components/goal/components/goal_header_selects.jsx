import React from 'react';

import Select from '../../../reusable/select';

const GoalHeaderSelects = (props) => {
    const {
        headerGoalConfig
    } = props;

    const renderHeaderSelects = () => {
        return headerGoalConfig.map((config, idx) => {
            return <Select {...config} key={idx}/>
        })
    }

    return renderHeaderSelects()
};

export default GoalHeaderSelects;