import translations from "../assets/translations/translations";

interface IStepOne {
    language: string;
}

const StepOne = ({language} : IStepOne) => {
    const info = translations[language].stepOne;
    
    return (
        <div>

            <h1>Step One</h1>
        </div>
    )
}

export default StepOne;