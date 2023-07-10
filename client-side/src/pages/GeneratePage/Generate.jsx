import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaClipboard, FaTheRedYeti } from 'react-icons/fa';
import { Form } from './form';
import { getRandomChar, getSpecialChar } from './helper';
import Navbar from '../Navbar/Navbar';
import './generate.css'

function Generate() {
  const [values, setValues]=Form({
    length: 6,
    capital: true,
    small: true,
    number: false,
    symbol: false,
  });
  const [result, setResult] = useState("");
  const fieldsArray = [
    {
      field: values.capital,
      getChar: () => getRandomChar(65, 90),
    },
    {
      field: values.small,
      getChar: () => getRandomChar(97, 122),
    },
    {
      field: values.number,
      getChar: () => getRandomChar(48, 57),
    },
    {
      field: values.symbol,
      getChar: () => getSpecialChar(),
    },
  ];

  const handleOnSubmit=function(event)
    {
        event.preventDefault();
        let generatedpw="";
        const CheckArray=fieldsArray.filter(({field})=>field)
        for(let i=0;i<values.length;i++)
        {
            const index=Math.floor(Math.random()*CheckArray.length)
            const letter=CheckArray[index]?.getChar();
            if(letter)
            generatedpw+=letter;
        }
        if(generatedpw)
        setResult(generatedpw);
    }

  const handleClipboard = async () => {
    if (result) {
      await navigator.clipboard.writeText(result);   //writing on clipboard
      toast("Copied to your clipboard");
    } else {
      toast('Nothing to copy');
    }
  };

  return (
    <div>
    <Navbar />
    <h1>Generate PassWord</h1>
    <div className='outer'>
      <div className="container">
        <form onSubmit={handleOnSubmit}>
          <div className="result">
            <input type="text" className="output" placeholder="Minimum 6 Characters" readOnly value={result} />
            <div className="clipboard" onClick={handleClipboard}>
              <FaClipboard></FaClipboard>
            </div>
          </div>
          <div>
            <div className="field">
              <label htmlFor="length">Length</label>
              <input type="number" id="length" min={6} max={20} name="length" value={values.length} onChange={setValues} />
            </div>
            <div className="field">
              <label htmlFor="capital">Uppercase</label>
              <input type="checkbox" id="capital" name="capital" checked={values.capital}onChange={setValues} />
            </div>
            <div className="field">
              <label htmlFor="small">Lowercase</label>
              <input type="checkbox" id="small" name="small" checked={values.small} onChange={setValues}/>
            </div>
            <div className="field">
              <label htmlFor="number">Number</label>
              <input type="checkbox" id="number" name="number" checked={values.number} onChange={setValues}></input>
            </div>
            <div className="field">
              <label htmlFor="symbol">Symbol</label>
              <input type="checkbox" id="symbol" name="symbol" checked={values.symbol} onChange={setValues}></input>
            </div>
          </div>
          <button type="submit">Generate Password</button>
        </form>
      </div>
      </div>
      <ToastContainer />
    </div>
  );
}
export default Generate;