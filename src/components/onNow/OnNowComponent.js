import React, { Component } from 'react';
import EventsList from './EventsList';

class OnNow extends Component {   
    render() {
        let events = []
        for (let ch in this.props.events) {
            events.push(
                {
                    channels: [...this.props.events[ch]],
                    genre: ch
                }
            );
        }
        return <EventsList events={events} />;

    }
    componentDidMount() {
        this.props.fetchEventsOnload();
    }
}


export default OnNow;