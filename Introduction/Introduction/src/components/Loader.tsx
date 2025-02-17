import translations from "../assets/translations/translations"
import { ILoader } from "../interfaces/Interfaces";
import logo from '../assets/images/logoMora.webp';
import timerPromise from "../assets/utils/timer";
import { useEffect, useState } from "react";

const Loader = ({language, currentStep}: ILoader) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const text = translations[language].loader;
    
    const hideLoader = async () => {
        await timerPromise(4.5);
        setIsVisible(false);
    }
    
    useEffect(() => {
        hideLoader();
    }, []);

    return(
        <>
            <div className={isVisible ? 'position-absolute' : 'd-none'}>
                {currentStep}
            </div>
            

            <div className = "loader-container">
                <div className = {isVisible ? 'top-face' : 'top-face hide'}></div>

                <div className = {isVisible ? 'right-face' : 'right-face hide'}></div>

                <div className = {isVisible ? 'bottom-face' : 'bottom-face hide'}></div>

                <div className = {isVisible ? 'left-face' : 'left-face hide'}></div>

                <div className = {isVisible ? 'central-logo' : 'central-logo hide'}>
                    <img src={logo} alt="logoImg"/>

                    <span className = {isVisible ? 'loader-text' : 'loader-text hide'}>
                        {text}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Loader;