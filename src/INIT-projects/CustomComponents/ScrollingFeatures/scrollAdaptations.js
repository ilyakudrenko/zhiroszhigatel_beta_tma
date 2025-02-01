import { useEffect } from "react";

const FixTelegramBehavior = () => {
    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.expand();
        }

        const handleTouchStart = (event) => {
            const target = event.target;
            const isScrollable = target.scrollHeight > target.clientHeight;

            if (!isScrollable) {
                event.preventDefault(); // Prevent Telegram's default pull-to-close behavior
            }
        };

        document.addEventListener("touchstart", handleTouchStart, { passive: false });

        return () => {
            document.removeEventListener("touchstart", handleTouchStart);
        };
    }, []);

    return null;
};

export default FixTelegramBehavior;