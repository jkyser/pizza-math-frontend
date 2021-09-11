/**
 * Adds the data-screen-active class to the element that was clicked
 * so that the value of that element can be changed by the user
 * 
 */

const changeActiveScreenInput = (e) => {

    // remove the data-screen-active from each HTML element that contains the class
    // there should only be one element with the class, but we iterate through
    // just in case something weird happened
    Array.from(document.getElementsByClassName('active-screen-input'))
         .forEach((node) => {
            node.classList.remove('active-screen-input');
    });

    // add the data-screen-active class
    e.target.classList.add('active-screen-input');
}

export default changeActiveScreenInput;