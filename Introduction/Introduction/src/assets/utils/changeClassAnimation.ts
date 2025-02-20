import timerPromise from "./timer";

const changeClassAnimation = async (containerStepOne:Element) => {
    await timerPromise(2.5);
    containerStepOne.classList.add('animation-fadeOut-opacity');
}

export default changeClassAnimation;