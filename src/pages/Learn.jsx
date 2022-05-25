import React from 'react'
import BinaryWaves from '../img/binaryWave.png'

export const Learn = () => {
    return (
        <>
            <div className="bg-slate-100 dark:bg-zinc-900 w-full h-screen flex flex-col justify-center items-center">
                <img src={BinaryWaves} alt="Binary numbers in a wave form" />;
            </div>
        </>
    )
}

