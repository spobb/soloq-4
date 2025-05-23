import type { ReactElement } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";

import './Layout.css';

export function Layout(): ReactElement {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>
        </>)
}