import React, {useState} from 'react';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';

const App = () => {
  const [imgSrc, setNewImgSrc] = useState('');  // for displaying the image from matplotlib

  return (
    <>
      <Navbar />
      
      <main className="container-fluid p-5">
        <div className="row">
          {/*Left side of the page containing the options for equation input*/}
          <Calculator />

          {/*Right side of the page containing the answers to everything and the graph of the equation*/}
          <div className="d-flex justify-content-end flex-column col-md-12 col-lg-8 ms-auto">
            <div>
              <span className="d-inline-block w-25 ms-5 me-5">
                <label htmlFor="lineareq-solvedeq" className="from-label">Solved Linear Equation</label>
                <input type="text" className="form-control" id="lineareq-solvedeq" disabled />
              </span>
              <span className="d-inline-block w-25 me-5">
                <label htmlFor="lineareq-slope" className="from-label">Slope</label>
                <input type="text" className="form-control" id="lineareq-slope" disabled />
              </span>
              <span className="d-inline-block w-25 me-5">
                <label htmlFor="lineareq-yintercept" className="from-label">Y-intercept</label>
                <input type="text" className="form-control" id="lineareq-yintercept" disabled />
              </span>
            </div>
            <img id="lineareq-graph" src="./images/empty-graph.svg" alt="graph will appear here" className="img-thumbnail mt-2" />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
