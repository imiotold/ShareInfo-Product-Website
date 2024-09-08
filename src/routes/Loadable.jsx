import React, { Suspense } from 'react';
import { LoadingScreen } from '../components/Pages/LoadingScreen';

const Loadable = (Component) => {
    const LoadableComponent = (props) => <Suspense fallback={<LoadingScreen />}>{React.createElement(Component, props)}</Suspense>;

    // Set the display name for debugging
    const componentName = Component.displayName || Component.name || 'Component';
    LoadableComponent.displayName = `Loadable(${componentName})`;

    return LoadableComponent;
};

export default Loadable;
