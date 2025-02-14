import { useEffect, useState } from "react"
import StepOne from "./components/stepOne"
import StepTwo from "./components/stepTwo";
import StepThree from "./components/stepThree";
import StepFour from "./components/stepFour";
import Portfolio from "./components/Portfolio";
import timerPromise from "./assets/utils/timer";
import './App.css';
import ChooseLanguage from "./components/ChooseLanguage";

function App() {
  const [step, setStep] = useState<number>(0);
  const [currentLanguage, setCurrentLanguage] = useState<string>("es");
  const [isLanguageChoosed, setIsLanguageChoosed] = useState<boolean>(false);

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


  useEffect(() => {
    if(!isLanguageChoosed) return;

    if(step == 4) return;
    timerSteps();
  }, [step, isLanguageChoosed])

  
  if(!isLanguageChoosed) {
    return(
        <ChooseLanguage
          setCurrentLanguage = {setCurrentLanguage}
          setIsLanguageChoosed = {setIsLanguageChoosed}
        />
    )
  }

  return (
    arraySteps[step]
  )
}

export default App
