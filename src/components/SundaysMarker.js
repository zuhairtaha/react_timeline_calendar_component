import React from 'react'
import {CustomMarker, TimelineMarkers} from 'react-calendar-timeline'
import moment from 'moment'

class SundaysMarker extends React.Component {

  state = {
    markerDates: []
  }

  componentDidMount() {
    const dates = []
    for (let i = 1; i < 100; i++) {
      dates.push({
        id: i,
        date: moment('2018/01/05').add(i * 7, 'day')
      })
      this.setState({markerDates: dates})
    }
  }

  render = () =>
    <TimelineMarkers>
      {this.state.markerDates
        .map(marker =>
          <CustomMarker
            key={marker.id}
            date={Number(marker.date)}>
            {({styles}) => {
              const customStyles = {
                ...styles,
                background: `repeating-linear-gradient(
                0deg, transparent, transparent 5px, white 5px, red 10px )`,
                width: '1px',
              }
              return <div style={customStyles} />
            }}
          </CustomMarker>
        )}
    </TimelineMarkers>
}

export default SundaysMarker