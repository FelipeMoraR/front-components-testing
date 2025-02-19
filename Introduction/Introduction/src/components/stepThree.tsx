import translations from "../assets/translations/translations";
import { ISteps, IProject } from "../interfaces/Interfaces";

const StepThree = ({language, isSkiped}: ISteps) => {
    const projects = translations[language].stepThree.projects;
    
    return (
        <div className="h-100 w-100 d-flex align-items-center justify-content-center">
            <div className="max-w-600 d-flex flex-wrap gap-6">
                {projects.map((project: IProject) => (
                    <div className="d-flex flex-shrink-1 flex-grow-0 flex-basis-600 gap-3">
                        <div className="img-step-three flex-shrink-0">
                            <img className="border-radius-100p" src={'src/assets/images/' + project.image} alt={project.image} />
                        </div>
                        
                        <div className="flex-grow-1 d-flex flex-column justify-content-space-between">
                            <div className="color-white font-weigth-500 font-size-5">
                                {project.title}
                            </div>

                            <div className="color-white font-weigth-400 font-size-3">
                                {project.enterprice}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default StepThree;