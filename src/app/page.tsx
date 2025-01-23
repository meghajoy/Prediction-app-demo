"use client";                                         //to make this a client component

// import styles from "../app/css/home.module.css";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";              //to navigate to pages, from next js
export default function Home() {
  const [inputValue, setInputValue] = useState("");   //React hook only works in a client component, so "use client" is imported
  const {push} = useRouter();                         //push is to route to the next page
  const handleSubmit = (event: FormEvent) =>{         //FormEvent from react
    event.preventDefault();                           // To prevent deafult refreshing
    push(`/prediction/${inputValue}`);                //Pushes to the prediction page and gives the value of the InputValue
  };
  return (
    // <div className="flex items-center justify-center">

    <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col gap-4">
      <div className="p-4  shadow-md bg-white rounded-md">
        <h1 className="text-2l font-mono font-semibold mb-4 text-black">Enter Your Name</h1>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input className="w-full p-2 border border-gray-300 rounded text-black" type="text" placeholder="Type your name" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <button className= "w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white "type="submit">Predict Data</button>
        </form>
      </div>
    </div>
    // </div>
  );
}
