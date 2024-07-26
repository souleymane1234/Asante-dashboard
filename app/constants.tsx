import { Icon } from '@iconify/react';

import { SideNavItem } from './types';
import { MdSick, MdOutlineSettings, MdOutlineLogout, MdHome } from "react-icons/md";
import { FaUser, FaHospital, FaPercentage } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiNurseMale } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Accueil',
    path: '/',
    icon: <MdHome className="text-2xl text-white group-hover:text-white" />,
  },
  {
    title: 'Hopitaux',
    path: '/hopitaux',
    icon: <FaHospital className="text-2xl text-white group-hover:text-white" />,
    submenu: true,
    subMenuItems: [
      { title: 'Publics', path: '/hopitaux/publics' },
      { title: 'Privee', path: '/hopitaux/privee' },
    ],
  },
  {
    title: 'Medecins',
    path: '/signIn',
    icon: <FaUserDoctor className="text-2xl text-white group-hover:text-white" />,
  },
  {
    title: 'Infirmiers',
    path: '/infirmiers',
    icon: <GiNurseMale className="text-2xl text-white group-hover:text-white" />,
  },
  {
    title: 'Patients',
    path: '/patients',
    icon: <MdSick className="text-2xl text-white group-hover:text-white" />,
  },
  {
    title: 'Utilisateurs',
    path: '/utilisateurs',
    icon: <FaUser className="text-2xl text-white group-hover:text-white" />,
  },
  {
    title: 'Pourcentage',
    path: '/pourcentage',
    icon: <FaPercentage className="text-2xl text-white group-hover:text-white" />,
  },
  {
    title: 'Transactions',
    path: '/transactions',
    icon: <GrTransaction className="text-2xl text-white group-hover:text-white" />,
  },
  {
    title: 'Parametres',
    path: '/parametres',
    icon: <MdOutlineSettings className="text-2xl text-white group-hover:text-white" />,
  },
  {
    title: 'Deconnexion',
    path: '/',
    icon: <MdOutlineLogout className="text-2xl text-white group-hover:text-white" />,
  },
//   {
//     title: 'Projects',
//     path: '/projects',
//     icon: <Icon icon="lucide:folder" width="24" height="24" />,
//     submenu: true,
//     subMenuItems: [
//       { title: 'All', path: '/projects' },
//       { title: 'Web Design', path: '/projects/web-design' },
//       { title: 'Graphic Design', path: '/projects/graphic-design' },
//     ],
//   },
//   {
//     title: 'Messages',
//     path: '/messages',
//     icon: <Icon icon="lucide:mail" width="24" height="24" />,
//   },
//   {
//     title: 'Settings',
//     path: '/settings',
//     icon: <Icon icon="lucide:settings" width="24" height="24" />,
//     submenu: true,
//     subMenuItems: [
//       { title: 'Account', path: '/settings/account' },
//       { title: 'Privacy', path: '/settings/privacy' },
//     ],
//   },
//   {
//     title: 'Help',
//     path: '/help',
//     icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
//   },
];