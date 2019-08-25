import moment from "moment";
function timeFormat(time) {
  return new Date(moment().utc(time).local().format(time));
}
var date = new Date();
var days = date.getDate() + 1;

export const dataTimeLine = [
  {
    id: 1,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 1} 04:12:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 1} 21:12:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 1} 19:12:10.000Z`),
    name: `Task time line 1`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 198,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 1} 08:45:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 1} 14:31:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 1} 19:12:10.000Z`),
    name: `Task time line 1.1`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 31,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 1} 09:54:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 1} 18:16:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 1} 19:12:10.000Z`),
    name: `Task time line 1.2`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 2,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 2} 08:33:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 2} 16:12:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 2} 19:12:10.000Z`),
    name: `Task time line 2`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 241,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 2} 01:13:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 2} 17:45:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 2} 12:34:10.000Z`),
    name: `Task time line 2.1`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 3,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 3} 15:32:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 3} 22:12:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 3} 19:11:10.000Z`),
    name: `Task time line 3`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 4,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 4} 12:31:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 4} 21:45:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 4} 19:12:10.000Z`),
    name: `Task time line 4`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 144,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 4} 07:54:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 4} 14:01:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 4} 12:34:10.000Z`),
    name: `Task time line 4.1`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 5,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 5} 04:12:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 5} 16:31:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 5} 19:44:10.000Z`),
    name: `Task time line 5`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 6,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 6} 19:56:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 6} 23:14:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 6} 19:12:10.000Z`),
    name: `Task time line 6`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 7,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 7} 17:24:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 7} 21:26:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 7} 19:12:10.000Z`),
    name: `Task time line 7`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 8,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 8} 11:41:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 8} 20:12:02.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 8} 21:12:10.000Z`),
    name: `Task time line 8`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 9,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 9} 10:03:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 9} 13:13:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 9} 04:12:10.000Z`),
    name: `Task time line 9`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 92,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 9} 02:39:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 9} 16:41:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 9} 12:32:10.000Z`),
    name: `Task time line 9.1`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 10,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 10} 11:09:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 10} 15:01:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 10} 19:21:10.000Z`),
    name: `Task time line 10`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 11,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 11} 01:54:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 11} 19:23:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 11} 03:44:10.000Z`),
    name: `Task time line 11`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 12,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 12} 12:13:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 12} 21:23:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 12} 19:21:10.000Z`),
    name: `Task time line 12`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 777,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 12} 04:19:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 12} 08:36:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 12} 19:21:10.000Z`),
    name: `Task time line 12.1`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 231,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 12} 09:15:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 12} 12:36:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 12} 19:21:10.000Z`),
    name: `Task time line 12.2`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 13,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 13} 14:22:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 13} 19:42:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 13} 03:54:10.000Z`),
    name: `Task time line 13`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 14,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 14} 08:12:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 14} 14:43:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 14} 06:21:10.000Z`),
    name: `Task time line 14`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 15,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 15} 01:53:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 15} 13:34:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 15} 04:11:10.000Z`),
    name: `Task time line 15`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 1351,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 15} 04:14:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 15} 23:56:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 15} 04:11:10.000Z`),
    name: `Task time line 15.1`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 16,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 16} 03:56:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 16} 09:33:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 16} 08:42:10.000Z`),
    name: `Task time line 16`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 1235,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 16} 09:34:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 16} 16:47:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 16} 07:42:10.000Z`),
    name: `Task time line 16.1`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 17,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 17} 11:12:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 17} 16:12:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 17} 22:32:10.000Z`),
    name: `Task time line 17`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 4413,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 17} 05:47:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 17} 15:52:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 17} 22:32:10.000Z`),
    name: `Task time line 17.1`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 2134,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 17} 04:14:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 17} 09:39:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 17} 17:32:10.000Z`),
    name: `Task time line 17.2`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
  {
    id: 3451,
    timeLine: {
      timeStart: timeFormat(`YYYY-MM-${days - 17} 14:32:10.000Z`),
      timeEnd: timeFormat(`YYYY-MM-${days - 17} 18:47:10.000Z`)
    },
    created: timeFormat(`YYYY-MM-${days - 17} 11:36:10.000Z`),
    name: `Task time line 17.3`,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    last_name: `Xuan Duy`,
    first_name: `Pham`
  },
];
