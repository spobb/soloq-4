import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function BodyStyleManager() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.startsWith('/joueur')) {
            document.body.classList.add('player-page-body');
        } else {
            document.body.classList.remove('player-page-body');
        }
    }, [location]);

    return null;
}