import { useState, useCallback, useEffect, useRef } from "react"


export default function PasswordGenerator(){
    const [length, setLength] = useState(10);
    const [isNumber, setNumeric] = useState(false);
    const [specialChar, setSpecialChar] = useState(false);
    const [Password, setPassword] = useState("");
    const passwordRef = useRef(null)
    const generatePass = useCallback(()=>{
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(isNumber) str += "0123456789";
        if(specialChar) str += "!@#$^*";
        for (let index = 1; index <= length; index++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);

    }, [length, isNumber, specialChar]);

    useEffect(generatePass, [length, isNumber, specialChar]);

    const copyPassword = useCallback(()=>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(Password);
    }, [Password]);
    return (
        <>
        <div className="w-full max-w-md mx-auto bg-gray-800 text-orange-500 px-4 py-3 rounded-lg shadow-md mt-20">
        <h3 className="text-center text-white">Password Generator</h3>
        <div className="flex shadow rounded-lg overflow-hidden mt-4">
            <input type="text" readOnly ref={passwordRef} value={Password} placeholder="Password" className="outerline-none w-full py-1 px-3 bg-white"/>
            <button type="button" onClick={copyPassword} className="px-4 py-2 rounded-tr-lg bg-orange-400 cursor-pointer text-white">Copy</button>
        </div>
        <div className="flex mt-3 justify-between items-start">
            <div className="flex flex-col">
            <input type="range" min="1" max="50" value={length} onChange={(e)=>setLength(e.target.value)}/>
            <span className="px-3">Length : {length}</span>
            </div>
            <div className="flex items-center">
            <input className="mr-1" type="checkbox" id="numeric" checked={isNumber} onChange={()=> setNumeric((prev) => !prev)} />
            <label htmlFor="numeric">isNumeric</label>
            </div>
            <div className="flex items-center">
            <input className="mr-1" type="checkbox" id="special" checked={specialChar} onChange={()=>setSpecialChar((prev) => !prev)} />
            <label htmlFor="special">Special Char</label>
            </div>
        </div>
        </div>
        </>
    )
}