/**
 * Handles the submit for the calculator input. Grabs all values from the individual
 * components and compiles them into a single string to send a HTTP POST request to the 
 * linear equation solving microservice.
 * 
 */
export default function submitLinearEquation() {
    // get full list of equation components
    let eqComponents = Array.from(document.getElementById('screen').children);

    // create the string
    let eqString = eqComponents.map(component => component.getAttribute('data-value')).join('');
    console.log(eqString);

    // send the request to the microservice
    fetch('https://salty-temple-04255.herokuapp.com/solve/linearequation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({equation: eqString})
    })
    .then((response) => response.json())
    .then((eq) => {
        // set all the values on the page to the solved values returned by the microservice
        document.getElementById('lineareq-solvedeq').value = eq.equation;
        document.getElementById('lineareq-slope').value = eq.slope;
        document.getElementById('lineareq-yintercept').value = eq.yIntercept;

        // get the graph through another microservice HTTP call
        _getLinearEqGraph(eq.slope, eq.yIntercept);
    });
}

/**
 * Handles the call to the graphing microservice to create a graph and display it on the page
 * Frist, creates an array of coordinates to send, then sends the request
 */
function _getLinearEqGraph(slope, yInt) {
    slope = Number(slope);
    yInt = Number(yInt);
    let xValues = [];
    let yValues = [];

    _generateXYValues(xValues, yValues, slope, yInt);

    // convert x values to a string because the microservice requires it
    // will be changed in the future when microservice is changed to a
    // python-based API
    xValues.forEach(value => String(value));

    _requestLinearEqGraph(xValues, yValues);
}

/**
 * Generates x and y values for a linear equation graph
 */
function _generateXYValues(x, y, slope, yInt) {
    // generate a list of x and y values
    for (let i = -10; i < 11; i++) {
        x.push(i);
        y.push((i * slope) + yInt);
    }
}

/**
 * Makes a request to the graphing microservice and sets the image to display that graph
 * Microservice returns a base64 encoded string that is set to the image's source
 * 
 */
function _requestLinearEqGraph(x, y) {
    // available options that must be set for the microservice
    let payload = {
        chartName: "Linear Equation Graph",
        xAxisLabel: "X Axis",
        yAxisLabel: "Y Axis",
        seriesName: "",
        yAxisValues: y,
        xAxisValues: x,
        width: 600,
        height: 400
    };

    // send request to graphing microservice
    fetch('https://pacific-castle-72671.herokuapp.com/basic/linegraph', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then((response) => response.text())
    .then((response) => {
        // set response base64 string as the new image source
        document.getElementById('lineareq-graph').setAttribute('src', `data:image/png;base64,${response}`)
    });
}