import React from 'react'
import { BeakerIcon } from '@heroicons/react/solid'
import { MenuIcon } from '@heroicons/react/outline'
import { Button } from "./Button"
import { HashLink as Link } from 'react-router-hash-link'

export const Navbar = () => {
    return (
        <div className="border-b bg-slate-100 dark:bg-zinc-900 dark:border-zinc-500 fixed top-0 w-full" >
            <div className='py-4 lg:px-8 max-w-6xl mx-auto'>
                <div className="relative flex items-center place-content-between mx-4 dark:text-zinc-300">
                    <div className='flex items-center text-lg font-medium text-green-500 dark:text-green-400'>
                        <a href="/">
                            Binary Converter
                        </a>
                    </div>
                    <div className="justify-center items-center space-x-4 hidden lg:inline-flex">
                        <Link to='/#decimal' className='hover:font-medium' smooth>
                            Decimal
                        </Link>
                        <Link to='/#text' className='hover:font-medium' smooth>
                            Text
                        </Link>
                        <Link to="/learn">
                            <Button>{"Learn"}</Button>
                        </Link>
                    </div>
                    <div className='flex items-center lg:hidden'>
                        <button>
                            <MenuIcon className='h-5 w-5' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}