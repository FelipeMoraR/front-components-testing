export interface IStepOne {
    language: string;
}

export interface IButton {
    text: string;
    cssClasses: string;
    onClick: () => void;
}


export interface IChooseLanguage {
    setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>; 
    setIsLanguageChoosed: React.Dispatch<React.SetStateAction<boolean>>; 
}

export interface ILoader {
    language: string;
    currentStep: React.ReactNode;
}