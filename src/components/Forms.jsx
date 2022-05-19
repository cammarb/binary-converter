import React from 'react'
import { Button } from "./Button"

export const Forms = () => {
    return (
        <>
            <div className="bg-slate-100 dark:bg-zinc-900 w-screen h-screen flex flex-col justify-center items-center">
                <div className="text-2xl dark:text-zinc-300 m-4 font-medium">
                    <h2>Insert decimal</h2>
                </div>
                <form className='dark:text-zinc-300 border border-zinc-400 rounded-md bg-slate-100 dark:bg-zinc-800'>
                    <input type="text" className='bg-transparent mx-3 outline-none' placeholder='E.g.: 123' />
                    <Button type="submit">Convert</Button>
                </form>
            </div>
        </>
    )
}