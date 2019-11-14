import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
let myWorker
export default function webWorker() {
    const [value1, setvalue1] = useState(0)
    const [value2, setvalue2] = useState(0)
    const workerEl = useRef(null);
    const number1El = useRef(null);
    const number2El = useRef(null);
    const resultEl = useRef(null);

    function onmessage(e) {
        console.log('Worker: Message received from main script');
        let result = e ? e.data[0] * e.data[1] : 100;
        console.error('arguments', arguments)
        if (isNaN(result)) {
            postMessage('Please write two numbers');
        } else {
            let workerResult = 'Result: ' + result;
            console.log('Worker: Posting message back to main script');
            postMessage(workerResult);
        }
        // return  e.data[0] * e.data[1];
    }

    function getWorkerCode() {
        const str = onmessage.toString()
        return '(' + str + ')()'
        // return str.slice(str.indexOf('{') + 1, str.lastIndexOf('return'))
    }

    function createWorker() {
        const result = resultEl.current

        if (window.Worker) {
            const blob = new Blob([getWorkerCode()]); // textContent为字符串脚本
            const url = window.URL.createObjectURL(blob);
            myWorker = new Worker(url);
            // const myWorker = new Worker("./worker.js");

            myWorker.onmessage = function (e) {
                result.textContent = e.data;
                console.log('Message received from worker');
            }
        } else {
            console.log('Your browser doesn\'t support web workers.')
        }
    }
    useEffect(() => { createWorker() }, [])
    const changeValue1 = (ev) => {
        const val = typeof ev === 'object' ? ev.target.value : ev
        setvalue1(val)
        myWorker.postMessage([val, value2]);
    }
    const changeValue2 = (ev) => {
        const val = typeof ev === 'object' ? ev.target.value : ev
        setvalue2(val)
        myWorker.postMessage([value1, val]);
    }
    return (
        <div>
            <h1 >Web<br />Workers<br />basic<br />example</h1>
            <div className="controls" tabindex="0">
                <form>
                    <div>
                        <label >Multiply number 1: </label>
                        <input type="text" onChange={changeValue1} value={value1} />
                    </div>
                    <div>
                        <label >Multiply number 2: </label>
                        <input type="text" onChange={changeValue2} value={value2} />
                    </div>
                </form>
                <p ref={resultEl} >Result: 0</p>
                <div ref={workerEl}>{''}</div>
            </div></div>
    )
}
