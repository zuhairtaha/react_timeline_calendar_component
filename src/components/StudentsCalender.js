import React, {Component} from 'react'
import moment from 'moment'
import Timeline, {TimelineMarkers, TodayMarker} from 'react-calendar-timeline'
import 'react-calendar-timeline/lib/Timeline.css'
import './style.css'
import itemRender from './itemRender'
import SundaysMarker from './SundaysMarker'
import groups from './studentsGroups'
import items from './stuentsItems'
import keys from './keys'

class StudentsCalender extends Component {
  state = {
    keys,
    groups,
    items,
    y19: new Date('2019/1/1'),
  }

  // addItemHandler = newItems => {
  //   console.log(newItems)
  //   this.setState(state => ({
  //     items: {...state.items, newItems}
  //   }))
  // }
  toTimestamp = strDate => {
    const d = new Date(strDate)
    return (Date.parse(d)) / 1000
  }

  addItemHandler = item => {
    const newItem = {
      id: 1 + this.state.items.reduce((max, value) => value.id > max ? value.id : max, 0),
      group: item.mentor,
      title: item.status,
      className: item.status,
      start: moment(new Date(item.start)),
      end: moment(new Date(item.end)),
    }


    this.setState(state => ({
      items: [...state.items, newItem]
    }))

  }
  handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const {items, groups} = this.state

    const group = groups[newGroupOrder]

    this.setState({
      items: items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
            start: dragTime,
            end: dragTime + (item.end - item.start),
            group: group.id
          })
          : item
      )
    })

    console.log('Moved', itemId, dragTime, newGroupOrder)
  }

  handleItemResize = (itemId, time, edge) => {
    const {items} = this.state

    this.setState({
      items: items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
            start: edge === 'left' ? time : item.start,
            end: edge === 'left' ? item.end : time
          })
          : item
      )
    })

    console.log('Resized', itemId, time, edge)
  }

  render() {
    const {keys, groups, items, y19} = this.state
    return (
      <>
        <Timeline
          keys={keys}
          groups={groups}
          // onItemClick={() => alert(1)}
          items={items}
          sidebarContent="Classes"
          lineHeight={75}
          itemRenderer={itemRender}
          defaultTimeStart={moment(y19).add(-2, 'month')}
          defaultTimeEnd={moment(y19).add(1, 'month')}
          maxZoom={1.5 * 365.24 * 86400 * 1000}
          minZoom={1.24 * 86400 * 1000 * 7 * 3}
          fullUpdate
          itemTouchSendsClick={false}
          stackItems
          itemHeightRatio={0.75}
          showCursorLine
          canMove={true}
          canResize={'both'}
          onItemMove={this.handleItemMove}
          onItemResize={this.handleItemResize}
        >
          <TimelineMarkers>
            <TodayMarker>
              {({styles, date}) => <div style={{...styles, width: '0.5rem', backgroundColor: 'rgba(255,0,0,0.5)'}} />
              }
            </TodayMarker>
            <SundaysMarker />
          </TimelineMarkers>
        </Timeline>

      </>
    )
  }

}

export default StudentsCalender