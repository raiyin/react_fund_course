import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from "../router";

const AppRouter = () => {
    const isAuth = false;
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Route
                    path="*"
                    element={<Navigate to="/posts" replace />}
                />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
            </Routes>
    );
};

export default AppRouter;
