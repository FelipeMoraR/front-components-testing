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
    <StepTwo
      language = {currentLanguage}
    />, 
    <StepThree
      language = {currentLanguage}
    />, 
    <StepFour
      language = {currentLanguage}
    />, 
    <Portfolio/>
  ]

  const arrayStepSkiped = [
    <StepOne
      language = {currentLanguage}
    />,
    <StepTwo
      language = {currentLanguage}
      isSkiped = {true}
    />, 
    <StepThree
      language = {currentLanguage}
      isSkiped = {true}
    />, 
    <StepFour
      language = {currentLanguage}
      isSkiped = {true}
    />, 
  ]
  
  const timerSteps = async () => {
    await timerPromise(3.5);
    setStep(step + 1);
  }

  const skipIntroduction = async () => {
    setIsLoading(true);
    await timerPromise(3);
    setIsIntroductionSkiped(true);
    setIsLoading(false);
  }

  useEffect(() => {
    if(isIntroductionSkiped) return;

    if(isLoading) return;

    if(!isLanguageChoosed) return;

    if(step == 4) return;
   
    timerSteps();
  }, [isLoading, step, isLanguageChoosed, isIntroductionSkiped])


  if(isLoading) return <Loader language = {currentLanguage} currentStep = {arrayStepSkiped[step]}/>
    
 
  if(!isLanguageChoosed) return <ChooseLanguage setCurrentLanguage = {setCurrentLanguage} setIsLanguageChoosed = {setIsLanguageChoosed} />
    
  if(isIntroductionSkiped) return <Portfolio/>
  


  return (
    <>
      {
        step >= 1 && step < 4 ? (
          <Button
            type = "skip-btn"
            cssClasses="exit-btn z-index-2 color-white position-absolute right-0 m-3 cursor-pointer border-solid-normal-purple-1 bg-normal-purple no-select animation-fadeIn-opacity border-radius-2"
            onClick={skipIntroduction}
          />
        ) : null
      }
      
      
      {arraySteps[step]}
    </>
    
  )
}

export default App
