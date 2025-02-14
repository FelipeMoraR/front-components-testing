import { IButton } from "../interfaces/Interfaces";


const Button = ({text, cssClasses,onClick}: IButton) => {
    return (
        <button className = {cssClasses} onClick={onClick}>{text}</button>
    )
}

export default Button;