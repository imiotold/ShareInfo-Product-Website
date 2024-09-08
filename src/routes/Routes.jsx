import { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NotFound } from '../components/Pages/NotFound';
import Loadable from './Loadable';
import { Campus } from '../components/Pages/Campus';
import { Employers } from '../components/Pages/Employers';
import { Vision2028 } from '../components/Pages/Vision2028';
import { Support } from '../components/Pages/Support';
import { ChangeLog } from '../components/Pages/ChangeLog';
import { Learning } from '../components/Pages/Learning';
import { Blog } from '../components/Pages/Blog';

const HomePage = Loadable(lazy(() => import('../components/Pages/HomePage').then((module) => ({ default: module.HomePage }))));
const Aspirants = Loadable(lazy(() => import('../components/Pages/Aspirants').then((module) => ({ default: module.Aspirants }))));

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
        path: '*',
        element: <NotFound />
    }
];

const createBrowserRouter = BrowserRouter;

export default createBrowserRouter;
