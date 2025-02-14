import translations from "../assets/translations/translations";
import { IStepOne } from "../interfaces/Interfaces";


const StepOne = ({language} : IStepOne) => {
    const info = translations[language].stepOne;
    console.log('info => ', info);
    return (
        <div>

            <h1>Step One</h1>
        </div>
    )
}

export default StepOne;