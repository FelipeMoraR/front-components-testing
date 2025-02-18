import translations from "../assets/translations/translations";
import { ISteps } from "../interfaces/Interfaces";

const StepThree = ({language, isSkiped}: ISteps) => {
    const textStep = translations[language].stepThree;
    console.log(textStep);
    if(isSkiped) return (
        <div>
            <h1 className="color-white">Step Three Skiped</h1>
        </div>
    )

    return (
        <div>
            <h1 className="color-white">Step Three</h1>
        </div>
    )
}

export default StepThree;