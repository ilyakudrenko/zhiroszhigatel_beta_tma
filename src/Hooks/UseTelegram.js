const  tg = window.Telegram.WebApp;

export function useTelegram() {

    const onBackButton = () => {
        if (tg.BackButton.isVisible){
            tg.BackButton.hide();
        }else{
            tg.BackButton.show();
        }
    }

    return{
        onBackButton,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}