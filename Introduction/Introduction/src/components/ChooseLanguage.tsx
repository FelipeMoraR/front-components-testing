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
        <div className="language-selector animation-fadeIn-opacity d-flex justify-content-center align-items-center gap-3 min-h-100vh flex-column no-select p-1">
          
          <h1 className="color-white font-size-5 font-weigth-400 text-center">Choose your <span className="color-ligth-purple font-weigth-800">language</span></h1>
          
          <div className="d-flex gap-3 flex-wrap justify-content-center">
              <div className = "position-relative container-flag d-flex flex-column align-items-center gap-1">
                <div className="container-img-flag">
                  <img src="src/assets/images/flags/cl.png" alt="esFlag" />

                  <Button
                    text = "Spanish"
                    type="button"
                    cssClasses= "position-absolute left-0 h-100 w-100 opacity-0 cursor-pointer"
                    onClick = {() => chooseLanguage('es')}
                  />
                </div>

                <div className="color-white text-center font-style-italic ">
                  <p>es</p>
                </div>
                
              </div>
              
              <div className="position-relative container-flag d-flex flex-column align-items-center gap-1">
                <div className="container-img-flag">
                  {/* <img src="https://flagsapi.com/US/shiny/64.png" alt="usFlag" /> */}
                  <img src="src/assets/images/flags/us.png" alt="usFlag" />
                  <Button
                    text = "English"
                    type="button"
                    cssClasses= "position-absolute left-0 h-100 w-100 opacity-0 cursor-pointer"
                    onClick = {() => chooseLanguage('en')}
                  />
                </div>

                <div className="color-white text-center font-style-italic ">
                  <p>en</p>
                </div>
                
              </div>
              
              <div className="position-relative container-flag d-flex flex-column align-items-center gap-1">
                <div className="container-img-flag">
                <img src="src/assets/images/flags/br.png" alt="ptFlag" />
                  
                  <Button
                    text = "Portuguese"
                    type="button"
                    cssClasses= "position-absolute left-0 h-100 w-100 opacity-0 cursor-pointer"
                    onClick = {() => chooseLanguage('pt')}
                  />
                </div>

                <div className="color-white text-center font-style-italic ">
                  <p>pt</p>
                </div>
              </div>
          </div>
        </div>
    )
}

export default ChooseLanguage;