import React, { Component } from 'react'
import { BeakerIcon } from '@heroicons/react/solid'
import { MenuIcon } from '@heroicons/react/outline'

export class Navbar extends Component {
    render() {
        return (
            <div className="border-b bg-slate-100 dark:bg-zinc-900 dark:border-zinc-500">
                <div className='py-4 lg:px-8 max-w-6xl mx-auto'>
                    <div className="relative flex items-center place-content-between mx-4 dark:text-zinc-300">
                        <div className='flex items-center text-lg font-medium'>
                            <a href="/">
                                Binary Converter
                            </a>
                        </div>
                        <div className="justify-center items-center space-x-4 hidden lg:inline-flex">
                            <a href="/decimal">Decimal</a>
                            <a href="/text">Text</a>
                        </div>
                        <div className='flex items-center lg:hidden'>
                            <MenuIcon className='h-5 w-5' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar