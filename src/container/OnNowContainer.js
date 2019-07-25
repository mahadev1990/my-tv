import React, { Component } from 'react';
import { fetchEvents } from '../store/actions/events';
import { connect } from 'react-redux';
import OnNow from '../components/onNow/OnNowComponent';


const mapStateToProps = state => {

    return {
        events: state.events
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEventsOnload: () => dispatch(fetchEvents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnNow);