import translations from "../assets/translations/translations";
import { ISteps } from "../interfaces/Interfaces";

const StepFour = ({language, isSkiped}: ISteps) => {
    const textStep = translations[language].stepFour;
    console.log(textStep);
    if(isSkiped) return (
        <div>
            <h1 className="color-white">Step Four skiped</h1>
        </div>
    )

    return (
        <div>
            <h1 className="color-white">Step Four</h1>
        </div>
    )
}

export default StepFour;