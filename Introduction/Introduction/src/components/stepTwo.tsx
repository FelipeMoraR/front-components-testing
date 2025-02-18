import { ISteps } from "../interfaces/Interfaces";
import translations from "../assets/translations/translations";
import timerPromise from "../assets/utils/timer";
import { useEffect } from "react";

const StepTwo = ({language, isSkiped}: ISteps) => {
    const textStep = translations[language].stepTwo;

    const changeClassAnimation = async (containerStepOne:Element) => {
        await timerPromise(2.5);
        containerStepOne.classList.add('animation-fadeOut-opacity');
    }

    useEffect(() => {
        const containerStepOne = document.querySelector('.containter-step-two');
       
        if(!containerStepOne) return;

        changeClassAnimation(containerStepOne);

    }, []);

    if(isSkiped) return (
            <div className = "h-100 w-100 d-flex align-items-center justify-content-center flex-column gap-3">
                <div className = "d-flex align-items-center justify-content-center flex-column">
                    <div className = "color-white font-size-md-4">
                        {textStep.titleName}
                    </div>

                    <div className = "color-ligth-purple font-weigth-600 font-size-md-12">
                        {textStep.name}
                    </div>
                </div>

                <div className = "stp2-description-text-container">
                    <div className = "color-white font-size-xxl-6">
                        {textStep.description}
                    </div>
                </div>
            
            </div>
        )

    return (
        <div className = "containter-step-two h-100 w-100 d-flex align-items-center justify-content-center flex-column gap-3">
            <div className = "d-flex align-items-center justify-content-center flex-column animation-fadeIn-opacity">
                <div className = "color-white font-size-md-4">
                    {textStep.titleName}
                </div>

                <div className = "color-ligth-purple font-weigth-600 font-size-md-12">
                    {textStep.name}
                </div>
            </div>

            <div className = "stp2-description-text-container">
                <div className = "color-white font-size-xxl-6 delay-05s typing-animation ">
                    {textStep.description}
                </div>
            </div>
            
        </div>
    )
}

export default StepTwo;