import { Routes, Route } from 'react-router-dom';
import { ROUTES } from 'config/routes.config';

import { Layout } from "layout/Layout";
import { HomePage } from 'pages/HomePage';
import { RulesPage } from 'pages/RulesPage';
import { ErrorPage } from 'pages/ErrorPage';
import { PlayerPage } from 'pages/PlayerPage';
import { SummonerProvider } from 'features/SummonerContext';
import { BodyStyleManager } from 'features/BodyStyleManager';


function App() {
    return (
        <SummonerProvider>
            <BodyStyleManager />
            <Routes>
                <Route path={ROUTES.HOME} element={<Layout />}>
                    <Route path={ROUTES.HOME} element={<HomePage />} />
                    <Route path={ROUTES.RULES} element={<RulesPage />} />
                    <Route path={ROUTES.PLAYER} element={<PlayerPage />} />
                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </SummonerProvider>
    )
}

export default App;
