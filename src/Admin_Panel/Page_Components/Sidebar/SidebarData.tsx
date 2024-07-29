// SidebarData.js
// import * as FaIcons from 'react-icons/fa';
// import * as IoIcons from 'react-icons/io';

import { BookOpenText,  LogIn, Newspaper, Settings, Users, UsersRound } from "lucide-react";

export const SidebarData = [
  {
    title: 'Members',
    path: '/admin/members',
    icon: <Users />,
    cName: 'nav-text'
  },
  {
    title: 'News',
    path: '/admin/news',
    icon: <Newspaper />,
    cName: 'nav-text'
  },
  {
    title: 'Coordinators',
    path: '/admin/coordinators',
    icon: <UsersRound />,
    cName: 'nav-text'
  },

  {
    title: 'Queries',
    path: '/admin/queries',
    icon: <BookOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Setting',
    path: '/admin/setting',
    icon: <Settings />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <LogIn />,
    cName: 'nav-text'
  }
];