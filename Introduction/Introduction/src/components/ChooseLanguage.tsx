import Button from "./Button";
import timerPromise from "../assets/utils/timer";
import { IChooseLanguage } from "../interfaces/Interfaces";


const ChooseLanguage = ({setCurrentLanguage, setIsLanguageChoosed}: IChooseLanguage) => {

    const chooseLanguage = async (language: string) => {
        const languageSelector = document.querySelector('.language-selector');
        if(!languageSelector) {
          console.log('container language-selector not founded'); 
          return;
        }
        languageSelector.classList.remove('animation-fadeIn-opacity');
        languageSelector.classList.add('animation-fadeOut-opacity');
        await timerPromise(.5);
        setCurrentLanguage(language);
        setIsLanguageChoosed(true);
      }


    return (
        <div className="language-selector animation-fadeIn-opacity d-flex justify-content-center align-items-center gap-3 h-100 flex-column no-select">
          
          <h1 className="color-white font-size-5 font-weigth-400 text-center">Choose your language</h1>

          <div className="d-flex gap-3 flex-wrap justify-content-center">
              <div className = "position-relative container-flag d-flex flex-column align-items-center">
                <div className="container-img-flag">
                  <img src="https://flagsapi.com/CL/shiny/64.png" alt="usFlag" />

                  <Button
                    text = "Spanish"
                    cssClasses= "position-absolute left-0 h-100 w-100 opacity-0 cursor-pointer"
                    onClick = {() => chooseLanguage('es')}
                  />
                </div>

                <div className="color-white text-center">
                  <p>es</p>
                </div>
                
              </div>
              
              <div className="position-relative container-flag d-flex flex-column align-items-center">
                <div className="container-img-flag">
                  <img src="https://flagsapi.com/US/shiny/64.png" alt="usFlag" />

                  <Button
                    text = "English"
                    cssClasses= "position-absolute left-0 h-100 w-100 opacity-0 cursor-pointer"
                    onClick = {() => chooseLanguage('en')}
                  />
                </div>

                <div className="color-white text-center">
                  <p>en</p>
                </div>
                
              </div>
              
              <div className="position-relative container-flag d-flex flex-column align-items-center">
                <div className="container-img-flag">
                  <img src="https://flagsapi.com/BR/shiny/64.png" alt="brazilFlag" />
                  
                  <Button
                    text = "Portuguese"
                    cssClasses= "position-absolute left-0 h-100 w-100 opacity-0 cursor-pointer"
                    onClick = {() => chooseLanguage('pt')}
                  />
                </div>

                <div className="color-white text-center">
                  <p>pt</p>
                </div>
              </div>
          </div>
        </div>
    )
}

export default ChooseLanguage;