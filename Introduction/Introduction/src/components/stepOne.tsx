import translations from "../assets/translations/translations";
import { IStepOne } from "../interfaces/Interfaces";
import timerPromise from "../assets/utils/timer";
import { useEffect } from "react";

const StepOne = ({language} : IStepOne) => {
    const stepOne = translations[language].stepOne;

    const changeClassAnimation = async (containerStepOne:Element) => {
        await timerPromise(2.5);
        containerStepOne.classList.add('animation-fadeOut-opacity');
    }

    useEffect(() => {
        const containerStepOne = document.querySelector('.containter-step-one');
        if(!containerStepOne) return;

        changeClassAnimation(containerStepOne);

    }, [])

    return (
        <div className="h-100 w-100 d-flex align-items-center overflow-hidden containter-step-one">
            <div className="position-relative h-lg-300px w-100">
                <div className="position-absolute top-0 left-48p translateX-neg-50 color-white font-size-md-8 m-3 animation-movement-left-center white-space-no-wrap">
                    {stepOne.titleOne}
                </div>

                <div className="position-absolute bottom-0 rigth-45p translateX-pos-50 color-white font-size-md-8 m-3 animation-movement-right-center white-space-no-wrap">
                    {stepOne.titleTwo}
                </div>
            </div>
        </div>
        
    )
}

export default StepOne;