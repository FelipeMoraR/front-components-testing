import translations from "../assets/translations/translations";
import { ISteps } from "../interfaces/Interfaces";

const StepFour = ({language, isSkiped}: ISteps) => {
    const textStep = translations[language].stepFour;
    
    return (
        <div className="min-h-100vh d-flex justify-content-center align-items-center">
            <div className="max-w-900 p-3 position-relative">
                <div className="color-white font-size-6 ">
                    {textStep.finalTitle}
                </div>
                
                <div className="first-letter-color-ligth-purple color-white position-absolute right-0 bottom-0 font-size-4">
                    {textStep.signature}
                </div>
            </div>
            
        </div>
    )
}

export default StepFour;