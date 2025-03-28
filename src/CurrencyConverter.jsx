import { useEffect, useState } from "react";
import InputBox from "./components/InputBox.jsx";
import {useCurrencyConverter} from './composables/currencyApi.js';
export default function CurrencyConverter() {
const [amount, setAmount] = useState(10);
const [convertedAmount, setconvertedAmount] = useState(0);
const [from, setFrom] = useState("usd");
const [to, setTo] = useState("inr");
const val = useCurrencyConverter(from);

const options = Object.keys(val);
const onAmountChange = (e)=>{
setAmount(e.target.value);
}
const onCurrencyChange = (e)=>{
setFrom(e.target.value);
}
const ontoCurrencyChange = (e)=>{
setTo(e.target.value);
}
const convert = ()=>{
    const value = amount * val[to];
    setconvertedAmount(value.toFixed(2));
}
const swap = ()=>{
    setconvertedAmount(amount);
setAmount(convertedAmount);
setFrom(to);
setTo(from);
}
    return (
        <>
            <div className="bg-grey-500 w-full h-screen flex justify-center items-center">
                <div className="w-full">
                    <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <h3 className="text-lg">Currency Convertor</h3>
                        <form className="flex flex-col gap-6">
                            <div className="w-full">
                                <InputBox label="From" amount={amount} onAmountChange={onAmountChange} currencyOptions={options} selectedCurrency={from} onCurrencyChange={onCurrencyChange} />
                                <InputBox label="To" amount={convertedAmount} currencyOptions={options} selectedCurrency={to} onCurrencyChange={ontoCurrencyChange} />
                               <button type="button" className="bg-orange-400 py-2 px-6 rounded-lg w-full" onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
                               <button type="button" className="bg-blue-400 py-2 px-6 rounded-lg w-full mt-2" onClick={swap}>Swap</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}