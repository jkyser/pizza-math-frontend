import React, {useState} from 'react';
import EqForm from './components/EqForm';
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
    placeholder: "Enter your equation",
    value: newEq
  }

  return (
    <>
      <Navbar />
      {/*Right side of the page containing the answers to everything and the graph of the equation*/}
      <div>
        <img src={imgSrc} alt="graph will appear here" />
      </div>


      {/*Right side of the page containing the options for equation input*/}
      <div>
        <EqForm attr={eqFormAttr} />
      </div>
    </>
  );
}

export default App;
