import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './config/routes.config';

import { Layout } from "./layout/Layout";
import { HomePage } from './pages/HomePage';


function App() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Layout />}>
                <Route path={ROUTES.HOME} element={<HomePage />} />
            </Route>
        </Routes>
    )
}

export default App;
