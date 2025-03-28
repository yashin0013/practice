

export default function InputBox(props) {
    const {
        label,
        amount,
        onAmountChange = ()=>{},
        onCurrencyChange,
        currencyOptions = [],
        selectedCurrency = "USD",
        amountDisable = false 
      } = props;
    return (
        <>
            <div className="mb-5">
                <label className="text-white font-medium mb-3 block">{label}</label>
                <div className="flex gap-4">
                    <input type="text" onChange={onAmountChange} disabled={amountDisable} value={Number(amount)} placeholder="Enter amount" className="flex-1 bg-white text-black border-2 border-gray-600 rounded-xl px-5 py-3 outline-none focus:border-blue-500 transition-colors" />
                    <select onChange={onCurrencyChange} className="w-32 bg-white text-black border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors uppercase" value={selectedCurrency}>
                        {
                            currencyOptions.map((item,index)=><option key={index} value={item} className="uppercase">{item}</option>
                                )
                        }
                    </select>
                </div>
            </div>
        </>
    )
}
