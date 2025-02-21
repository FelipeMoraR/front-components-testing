import translations from "../assets/translations/translations";
import { ISteps, IProject } from "../interfaces/Interfaces";
import changeClassAnimation from "../assets/utils/changeClassAnimation";
import { useEffect } from "react";

const StepThree = ({language, isSkiped}: ISteps) => {
    const projects = translations[language].stepThree.projects;
    
    useEffect(() => {
        const container = document.querySelector('.containter-step-three');
        if(!container) return;

        changeClassAnimation(container);

    }, []);

    const delays = ['', 'delay-02s', 'delay-04s', 'delay-06s'];

    return (
        <div className = "containter-step-three min-h-100vh w-100 d-flex align-items-center justify-content-center">
            <div className = "max-w-600 d-flex flex-wrap gap-6 p-3">
                {projects.map((project: IProject, index: number) => (
                    <div className={!isSkiped ? "opacity-0 d-flex flex-shrink-1 flex-grow-0 flex-basis-600 gap-3 animation-falling-down " + delays[index] : "d-flex flex-shrink-1 flex-grow-0 flex-basis-600 gap-3"}>
                        <div className="img-step-three flex-shrink-0">
                            <img className="border-radius-100p " src={'src/assets/images/' + project.image} alt={project.image} />
                        </div>
                        
                        <div className="flex-grow-1 d-flex flex-column gap-3 ">
                            <div className="color-white font-weigth-800 font-size-4 color-ligth-purple">
                                {project.enterprice}
                            </div>

                            <div className="color-white font-weigth-200 font-size-3 font-style-italic">
                                {project.title}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default StepThree;