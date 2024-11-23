import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const INITBackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const tg = window.Telegram.WebApp;

        if (location.pathname !== '/') {
            tg.BackButton.show();
            const handleBackClick = () => navigate(-1);
            tg.BackButton.onClick(handleBackClick);

            return () => {
                tg.BackButton.offClick(handleBackClick);
                tg.BackButton.hide();
            };
        } else {
            tg.BackButton.hide();
        }
    }, [location, navigate]);
};

export default INITBackButton;