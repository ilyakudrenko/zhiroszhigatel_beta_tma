import { useEffect } from "react";

const FixTelegramBehavior = () => {
    useEffect(() => {
        // Ensure the Telegram Web App is expanded to prevent minimize gestures
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.expand();
        }

        // Prevent overscroll behavior
        const preventScroll = (event) => {
            event.preventDefault();
        };

        document.addEventListener("touchmove", preventScroll, { passive: false });
        document.addEventListener("wheel", preventScroll, { passive: false });

        return () => {
            document.removeEventListener("touchmove", preventScroll);
            document.removeEventListener("wheel", preventScroll);
        };
    }, []);

    return null; // This component doesn't render anything
};

export default FixTelegramBehavior;