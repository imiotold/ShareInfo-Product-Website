import { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NotFound } from '../components/Pages/NotFound';
import Loadable from './Loadable';

const HomePage = Loadable(lazy(() => import('../components/Pages/HomePage').then((module) => ({ default: module.HomePage }))));
const Aspirants = Loadable(lazy(() => import('../components/Pages/Aspirants').then((module) => ({ default: module.Aspirants }))));
const Campus = Loadable(lazy(() => import('../components/Pages/Campus').then((module) => ({ default: module.Campus }))));
const Employers = Loadable(lazy(() => import('../components/Pages/Employers').then((module) => ({ default: module.Employers }))));
const Vision2028 = Loadable(lazy(() => import('../components/Pages/Vision2028').then((module) => ({ default: module.Vision2028 }))));
const Support = Loadable(lazy(() => import('../components/Pages/Support').then((module) => ({ default: module.Support }))));
const ChangeLog = Loadable(lazy(() => import('../components/Pages/ChangeLog').then((module) => ({ default: module.ChangeLog }))));
const Learning = Loadable(lazy(() => import('../components/Pages/Learning').then((module) => ({ default: module.Learning }))));
const Blog = Loadable(lazy(() => import('../components/Pages/Blog').then((module) => ({ default: module.Blog }))));
const Ai = Loadable(lazy(() => import('../components/Pages/Ai').then((module) => ({ default: module.Ai }))));

export const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: 'aspirants',
        element: <Aspirants />
    },
    {
        path: 'campus',
        element: <Campus />
    },
    {
        path: 'employers',
        element: <Employers />
    },
    {
        path: 'vision28',
        element: <Vision2028 />
    },
    {
        path: 'support',
        element: <Support />
    },
    {
        path: 'changelog',
        element: <ChangeLog />
    },
    {
        path: 'learning',
        element: <Learning />
    },
    {
        path: 'blog',
        element: <Blog />
    },
    {
        path: 'shareinfoai',
        element: <Ai />
    },
    {
        path: '*',
        element: <NotFound />
    }
];

const createBrowserRouter = BrowserRouter;

export default createBrowserRouter;
