import moment from 'moment'

const y19 = new Date('2018/11/1')

const HTMLCSS = {
  title: 'HTML/CSS',
  className: 'htmlCss',
  mentors: [1, 2]
}
const JS1 = {
  title: 'JavaScript 1',
  className: 'js1',
  mentors: [3]
}
const JS2 = {
  title: 'JavaScript 2',
  className: 'js2',
  mentors: [4]
}
const JS3 = {
  title: 'JavaScript 3',
  className: 'js3',
  mentors: [4, 5]
}
const NodeJs = {
  title: 'Node.js',
  className: 'nodejs',
  mentors: [6]
}
const MySQL = {
  title: 'MySQL',
  className: 'mySql',
  mentors: [4, 7]
}
const React = {
  title: 'React',
  className: 'react',
  mentors: [9, 8]
}

const items = [
  {
    id: 1,
    group: 1,
    ...JS1,
    start: moment(y19).add(3, 'week'),
    end: moment(y19).add(6, 'week'),
  },
  {
    id: 2,
    group: 1,
    ...JS2,
    start: moment(y19).add(6, 'week'),
    end: moment(y19).add(9, 'week'),
  },
  {
    id: 3,
    group: 1,
    ...JS3,
    start: moment(y19).add(9, 'week'),
    end: moment(y19).add(12, 'week'),
  },
  {
    id: 4,
    group: 2,
    ...NodeJs,
    start: moment(y19).add(2, 'week'),
    end: moment(y19).add(5, 'week'),
  },
  {
    id: 5,
    group: 2,
    ...MySQL,
    start: moment(y19).add(5, 'week'),
    end: moment(y19).add(7, 'week'),
  },
  {
    id: 6,
    group: 2,
    ...React,
    start: moment(y19).add(7, 'week'),
    end: moment(y19).add(12, 'week'),
  },

  {
    id: 7,
    group: 3,
    ...HTMLCSS,
    start: moment(y19).add(1, 'week'),
    end: moment(y19).add(4, 'week'),
  },
  {
    id: 8,
    group: 3,
    ...JS1,
    start: moment(y19).add(4, 'week'),
    end: moment(y19).add(7, 'week'),
  },

]
export default items