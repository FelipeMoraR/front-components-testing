import { useEffect, useState } from "react"
import StepOne from "./components/stepOne"
import StepTwo from "./components/stepTwo";
import StepThree from "./components/stepThree";
import StepFour from "./components/stepFour";
import Portfolio from "./components/Portfolio";
import timerPromise from "./assets/utils/timer";
import './App.css';
import ChooseLanguage from "./components/ChooseLanguage";
import Button from "./components/Button";
import translations from "./assets/translations/translations";
import Loader from "./components/Loader";


function App() {
  const [step, setStep] = useState<number>(0);
  const [currentLanguage, setCurrentLanguage] = useState<string>("es");
  const [isLanguageChoosed, setIsLanguageChoosed] = useState<boolean>(false);
  const [isIntroductionSkiped, setIsIntroductionSkiped] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const arraySteps = [
    <StepOne
      language = {currentLanguage}
    />, 
    <StepTwo/>, 
    <StepThree/>, 
    <StepFour/>, 
    <Portfolio/>
  ]
  
  const timerSteps = async () => {
    await timerPromise(3);
    setStep(step + 1);
  }

  const skipIntroduction = async () => {
    setIsLoading(true);
    await timerPromise(5);
    setIsIntroductionSkiped(true);
    setIsLoading(false);
  }

  useEffect(() => {
    if(isIntroductionSkiped) return;

    if(isLoading) return;

    if(!isLanguageChoosed) return;

    if(step == 4) return;
    console.log('executing timerSteps');
    timerSteps();
  }, [isLoading, step, isLanguageChoosed, isIntroductionSkiped])

  

  if(isLoading){
    return(
        <Loader
          language = {currentLanguage}
          currentStep = {arraySteps[step]}
        />
    )
  }

  if(!isLanguageChoosed) {
    return(
        <ChooseLanguage
          setCurrentLanguage = {setCurrentLanguage}
          setIsLanguageChoosed = {setIsLanguageChoosed}
        />
    )
  }

  if(isIntroductionSkiped){
    return(
      <Portfolio/>
    )
  }

  console.log('render last return');

  return (
    <>
      {
        step >= 1 && step < 4 ? (
          <Button
          text= {translations[currentLanguage].exit}
          cssClasses="exit-btn color-white position-absolute right-0 m-3 p-3 cursor-pointer boder-solid-normal-purple-1 bg-normal-purple no-select animation-fadeIn-opacity border-radius-2"
          onClick={skipIntroduction}
        />
        ) : null
      }
      
      {arraySteps[step]}
    </>
    
  )
}

export default App
