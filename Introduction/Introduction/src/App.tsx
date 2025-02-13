import { useEffect, useState } from "react"
import StepZero from "./components/StepZero";
import StepOne from "./components/stepOne"
import StepTwo from "./components/stepTwo";
import StepThree from "./components/stepThree";
import StepFour from "./components/stepFour";
import Portfolio from "./components/Portfolio";

function App() {
  const [step, setStep] = useState<number>(0);
  const [currentLanguage, setCurrentLanguage] = useState<string>("es");

  const arraySteps = [
    <StepZero/>,
    <StepOne
      language = {currentLanguage}
    />, 
    <StepTwo/>, 
    <StepThree/>, 
    <StepFour/>, 
    <Portfolio/>]
  
  const timerSteps = async () => {
    await new Promise((resolve) => setInterval(resolve, 1000));
    setStep(step + 1);
  }


  useEffect(() => {
    if(step == 5) return;
    timerSteps();
  }, [step])

  console.log('render app');

  return (
    arraySteps[step]
  )
}

export default App
