import moment from 'moment'

const y19 = new Date('2019/1/1')
const items = [
  {
    id: 1,
    group: 1,
    title: 'Confirm',
    className: 'confirm',
    start: moment(y19),
    end: moment(y19).add(3, 'week'),
    canMove: true,
    canResize: false,
    canChangeGroup: false,
  },
  {
    id: 2,
    group: 2,
    title: 'Assign',
    className: 'assign',
    tip: 'additional information',
    selectedBgColor: 'rgba(225, 166, 244, 1)',
    start: moment(y19),
    end: moment(y19).add(3, 'week'),
  },
  {
    id: 3,
    group: 1,
    title: 'Pending',
    className: 'pending',
    start: moment(y19).add(3, 'week'),
    end: moment(y19).add(6, 'week'),
  },

]
export default items