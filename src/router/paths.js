/* eslint-disable prettier/prettier */
import NotFound from "../components/error/NotFound";

import Dashboard from "../views/dashboard/Home";
import Tickets from "../views/tickets/Home";
import TimeLine from "../views/timeLine/Home";
import Kanban from "../views/kanban/Home";
import TaskBoard from "../views/taskBoard/Home";
import Todos from "../views/todos/Home";
import FilesUpload from "../views/filesUpload/Home";
import Messages from "../views/messages/Home";
import Report from "../views/report/Home";

export default [
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/",
    name: "Root",
    redirect: {
      name: "Dashboard"
    }
  },
  //List Menu router
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/tickets/:type?",
    name: "Tickets",
    component: Tickets
  },
  {
    path: "/time-line",
    name: "TimeLine",
    component: TimeLine
  },
  {
    path: "/kan-ban",
    name: "Kanban",
    component: Kanban
  },
  {
    path: "/task-board",
    name: "TaskBoard",
    component: TaskBoard
  },
  {
    path: "/todo-list",
    name: "Todos",
    component: Todos
  },
  {
    path: "/files-drag-drop",
    name: "FilesUpload",
    component: FilesUpload
  },
  {
    path: "/chat-message",
    name: "Messages",
    component: Messages
  },
  {
    path: "/report",
    name: "Report",
    component: Report
  }
];
