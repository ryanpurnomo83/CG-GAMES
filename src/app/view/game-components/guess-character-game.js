'use client';

import { useState } from "react";
const characters = [
    {
        name: "Naruto",
        description: "Seorang ninja dengan cita-cita menjadi hokage dan memiliki jurus Rasengan."
    },
    {
        name: "Goku",
        description: "Prajurit Saiyan yang kuat, suka makan, dan bisa berubah menjadi Super Saiyan."
    },
    {
        name: "Spongebob",
        description: "Bekerja di Krusty Krab, tinggal di bawah laut di rumah berbentuk nanas."
    }
];

export default function Game2(){
    const[current, setCurrent] = useState(0);
    const[guess, setGuess] = useState("");
    const[message, setMessage] = useState("");

    const handleGuess = () => {
        if(guess.trim().toLowerCase() === characters[current].name.toLowerCase()){
            setMessage("Benar! Lanjut ke karakter berikutnya.");
            setTimeout(() => {
                setCurrent((prev) => (prev+1) % characters.length);
                setGuess("");
                setMessage("");
            }, 1500);
        }else{
            setMessage("Salah! Coba lagi.");
        }
    };
    
    return(
        <>
        <Head>
            <title>Guess Character Game</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
        </Head>

        <main className="flex minh-screen flex-col items-center justify center p-4 bg-blue-100">
            <div className="max-w-md p-6 bg-white rounded-xl shadow-md space-y-4">
                <h1 className="text-2xl font-bold text-center">Tebak Karakter</h1>
                <p className="text-center">{characters[current].description}</p>
                <input type="text" value={guess} onChange={(e) => setGuess(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Tebak siapa?"/>
                <button onClick={handleGuess} className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
                {message && <p className="text-center font-semibold">{message}</p>}
            </div>
        </main>
        </>
    );
}