import React, {useState} from 'react';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';

const App = () => {
  const [newEq, setNewEq] = useState(''); // equation text input
  const [imgSrc, setNewImgSrc] = useState('');  // for displaying the image from matplotlib

  // for updating and tracking the change of the input element
  const handleTextChange = (e) => {
    setNewEq(e.target.value);
  }

  // attributes for the equation form, all bundled up into a nice object
  const eqFormAttr = {
    changeHandler: handleTextChange,
    value: newEq
  }

  return (
    <>
      <Navbar />
      
      <main className="container-fluid p-5">
        <div className="row">
          {/*Left side of the page containing the options for equation input*/}
          <Calculator />

          {/*Right side of the page containing the answers to everything and the graph of the equation*/}
          <div className="d-flex justify-content-center col-md-12 col-lg-8">
            <img src="./images/empty-graph.png" alt="graph will appear here" className="img-thumbnail" />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
