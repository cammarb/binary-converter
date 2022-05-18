import React, { Component } from 'react'
import { BeakerIcon } from '@heroicons/react/solid'
import { MenuIcon } from '@heroicons/react/outline'

export class Navbar extends Component {
    render() {
        return (
            <div className="max-w-8xl mx-auto">
                <div className='py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0'>
                    <div className="relative flex items-center place-content-between">
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