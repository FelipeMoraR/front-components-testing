import { useEffect, useState } from "react"
import StepOne from "./components/stepOne"
import StepTwo from "./components/stepTwo";
import StepThree from "./components/stepThree";
import StepFour from "./components/stepFour";
import Portfolio from "./components/Portfolio";
import Button from "./components/Button";
import './App.css';

function App() {
  const [step, setStep] = useState<number>(0);
  const [currentLanguage, setCurrentLanguage] = useState<string>("es");
  const [isLanguageChoosed, setIsLanguageChoosed] = useState<boolean>(false);

  const chooseLanguage = (language: string) => {
    setCurrentLanguage(language);
    setIsLanguageChoosed(true);
  }


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
    await new Promise((resolve) => setInterval(resolve, 2000));
    setStep(step + 1);
  }


  useEffect(() => {
    if(!isLanguageChoosed) return;

    if(step == 5) return;
    timerSteps();
  }, [step, isLanguageChoosed])

  
  if(!isLanguageChoosed) {
    return(
        <div className="d-flex justify-content-center align-items-center gap-3 h-100 flex-column">
          
          <h1>Choose a language</h1>

          <div className="d-flex gap-3 flex-wrap">
            <div className = "position-relative ">
                <img src="https://flagsapi.com/CL/shiny/64.png" alt="usFlag" />

                <Button
                  text = "Spanish"
                  cssClasses= "position-absolute left-0 h-100 w-100 opacity-0"
                  onClick = {() => chooseLanguage('es')}
                />
              </div>
              
              <div className="position-relative">
                <img src="https://flagsapi.com/US/shiny/64.png" alt="usFlag" />

                <Button
                  text = "English"
                  cssClasses= "position-absolute left-0 h-100 w-100 opacity-0"
                  onClick = {() => chooseLanguage('en')}
                />
              </div>
              
              <div className="position-relative">
                <img src="https://flagsapi.com/BR/shiny/64.png" alt="brazilFlag" />
                
                <Button
                  text = "Portuguese"
                  cssClasses= "position-absolute left-0 h-100 w-100 opacity-0"
                  onClick = {() => chooseLanguage('pt')}
                />
              </div>
          </div>
        </div>
    )
  }


  return (
    arraySteps[step]
  )
}

export default App
