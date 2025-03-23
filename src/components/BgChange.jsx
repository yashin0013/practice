import { useState } from "react"


export default function BgChange(){

    const [color, setColor] = useState('bg-sky-700');
return (
    <>
    <div className={`${color} flex items-center justify-center h-96 mt-10`}>
        <div className="flex items-center justify-center bg-white p-3 rounded-lg">
        <button onClick={()=> setColor("bg-black")} className="m-2 px-3 py-2 rounded-lg bg-black text-white cursor-pointer">Black</button>
        <button onClick={()=> setColor("bg-blue-900")} className="m-2 px-3 py-2 rounded-lg bg-blue-900 text-white cursor-pointer">Blue</button>
        <button onClick={()=> setColor("bg-sky-700")} className="m-2 px-3 py-2 rounded-lg bg-sky-700 text-white cursor-pointer">Sky Blue</button>
        <button onClick={()=> setColor("bg-green-500")} className="m-2 px-3 py-2 rounded-lg bg-green-500 text-white cursor-pointer">Green</button>
        <button onClick={()=> setColor("bg-amber-500")} className="m-2 px-3 py-2 rounded-lg bg-amber-500 text-white cursor-pointer">Amber</button>
        </div>
    </div>
    </>
)
}

