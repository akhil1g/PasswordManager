import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaClipboard, FaTheRedYeti } from 'react-icons/fa';

import { Form } from './form';
import { getRandomChar, getSpecialChar } from './helper';
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
    const handleOnSubmit=function(event){
        event.preventDefault();
        let generatedpw="";
        const CheckArray=fieldsArray.filter(({field})=>field)
        for(let i=0;i<values.length;i++){
            const index=Math.floor(Math.random()*CheckArray.length)
            const letter=CheckArray[index]?.getChar();
            if(letter) generatedpw+=letter;
        }
        if(generatedpw) setResult(generatedpw);
    }

    const handleClipboard = async () => {
        if(result){
            await navigator.clipboard.writeText(result);   //writing on clipboard
            toast("Copied to your clipboard");
        }else{
            toast('Nothing to copy');
        }
    };

    return (
        <div className="gen-container">
            <h2 className="gen-heading1">Generate PassWord</h2>
                <form className="gen-form" onSubmit={handleOnSubmit}>
                    <div className="gen-result">
                        <input 
                            className="gen-output"
                            type="text" 
                            placeholder="minimum 6 characters" 
                            readOnly value={result} 
                        />
                        <div 
                            className="gen-clipboard" 
                            onClick={handleClipboard}>
                            <FaClipboard />
                        </div>
                    </div>

                    <div className="gen-box">
                        <div className="gen-field">
                                <label className="gen-label" htmlFor="length">Length</label>
                                <input 
                                    className="gen-input"
                                    type="number" 
                                    id="length" 
                                    min={6} 
                                    max={20} 
                                    name="length" 
                                    value={values.length} 
                                    onChange={setValues} 
                                />
                        </div>
                        <div className="gen-field">
                                <label className="gen-label" htmlFor="capital">Uppercase</label>
                                <input 
                                    className="gen-input"
                                    type="checkbox" 
                                    id="capital" 
                                    name="capital" 
                                    checked={values.capital}
                                    onChange={setValues} 
                                />
                        </div>
                        <div className="gen-field">
                                <label className="gen-label" htmlFor="small">Lowercase</label>
                                <input 
                                    className="gen-input"
                                    type="checkbox" 
                                    id="small" 
                                    name="small" 
                                    checked={values.small} 
                                    onChange={setValues}
                                />
                        </div>
                        <div className="gen-field">
                                <label className="gen-label"htmlFor="number">Number</label>
                                <input 
                                    className="gen-input"
                                    type="checkbox" 
                                    id="number" 
                                    name="number" 
                                    checked={values.number} 
                                    onChange={setValues}
                                />
                        </div>
                        <div className="gen-field">
                                <label className="gen-label" htmlFor="symbol">Symbol</label>
                                <input 
                                    className="gen-input"
                                    type="checkbox" 
                                    id="symbol" 
                                    name="symbol" 
                                    checked={values.symbol} 
                                    onChange={setValues}
                                />
                        </div>
                        <button 
                            className="gen-btn"
                            type="submit">Generate
                        </button>
                    </div>
                </form>
            <ToastContainer />
        </div>
    );
}
export default Generate;