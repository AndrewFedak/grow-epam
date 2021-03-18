import React, {useEffect} from 'react';
import {connect} from 'react-redux'

import Dashboard from '../components/dashboard/dashboard';
import FilterControls from '../components/dashboard/components/filter_controls';

const Root = ({state}) => {
  useEffect(() => {
    window.localStorage.setItem('grow', JSON.stringify(state))
  }, [state])

  return (
    <div className='main'>
        <FilterControls />
        <Dashboard />
    </div>
  );
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps)(Root);
