import React, { Component } from 'react';
import classes from './OnNow.module.scss';
import ImgCard from './ImgCard';
class EventsList extends Component {
    state = {}
    componentWillMount = () => {
        let EventLists = [...this.props.events]
        EventLists.map(event => {
            event.displayEvents = event.channels.slice(0, 4)
            event.initialIndex = 0
            event.navigatorVisibility = event.channels.length > 4 ? true : false
            event.rightArroVisibility = true
            event.leftArroVisibility = false

            return event;
        })
        this.updateState(EventLists)
    }
    componentWillReceiveProps = (currentProp, prevProp) => {
        currentProp.events.map(event => {
            event.displayEvents = event.channels.slice(0, 4)
            event.initialIndex = 0
            event.navigatorVisibility = event.channels.length > 4 ? true : false
            event.rightArroVisibility = true
            event.leftArroVisibility = false

            return event;
        })
        this.updateState(currentProp.events)
    }
    onEventMouseChange = (item, index, isVisible) => {
        let val = { ...item }
        let updatedList = [...this.state.events]
        val.onOverNavigatorVisibility = isVisible
        updatedList[index] = val
        this.updateState(updatedList)

    }
    updateState = (events) => {
        this.setState({ events: events })
    }
    onHandleNextEvent = (index) => {
        let updatedList = [...this.state.events]
        let newList = { ...updatedList[index] }
        if ((newList.initialIndex + 4) < newList.channels.length) {
            newList.initialIndex++
            newList.displayEvents = newList.channels.slice(newList.initialIndex, newList.initialIndex + 4)
            newList.rightArroVisibility = (newList.initialIndex + 4) >= newList.channels.length ? false : true
            newList.leftArroVisibility = true
            updatedList[index] = newList
            this.updateState(updatedList)

        }
    }
    onHandlePrevioustEvent = (index) => {
        let updatedList = [...this.state.events]
        let newList = { ...updatedList[index] }
        if (newList.initialIndex > 0) {
            newList.initialIndex--
            newList.displayEvents = newList.channels.slice(newList.initialIndex, newList.initialIndex + 4)
            newList.leftArroVisibility = newList.initialIndex == 0 ? false : true
            newList.rightArroVisibility = true
            updatedList[index] = newList
            this.updateState(updatedList)

        }
    }
    render() {
        return (<div className={classes.Events}>

            {
                this.state.events ? this.state.events.map((item, index) =>
                    (<div key={item.genre} className={classes.PosRl} onMouseEnter={() => {
                        this.onEventMouseChange(item, index, true)
                    }} onMouseLeave={() => {
                        this.onEventMouseChange(item, index, false)
                    }} >
                        <h1 className={classes.Genre}>{item.genre}</h1>
                        {item.navigatorVisibility && item.onOverNavigatorVisibility ? (<>{item.leftArroVisibility ? <span className={[classes.NavigateBtn, classes.BtnLeft].join(' ')} onClick={() => {
                            this.onHandlePrevioustEvent(index)
                        }}>{'<'}</span> : ''}{item.rightArroVisibility ? <span className={[classes.NavigateBtn, classes.BtnRight].join(' ')} onClick={() => {
                            this.onHandleNextEvent(index)
                        }}>></span> : ''}</>) : ''}
                        <ul>
                            {
                                item.displayEvents.map(ch =>
                                    (
                                        <ImgCard key={item.genre + ch.channelNumber} ch={ch} item={item} />
                                    )
                                )
                            }
                        </ul>

                    </div>)
                ) : null
            }

        </div>
        )
    }
}

export default EventsList