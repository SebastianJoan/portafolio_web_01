'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Appbar(props) {

  const [IsMenuOpen, setIsMenuOpen] = useState(false);
    
    return(
        <>
            <nav className="bg-gray-800 shadow">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-end h-16">
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center gap-5 md:ml-6">
                                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white hover:text-gray-800">
                                    Inicio
                                </Link>
                                <Link href="/about-me/" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white hover:text-gray-800">
                                    Sobre Mi
                                </Link>
                                <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white hover:text-gray-800">
                                    Contacto
                                </Link> 
                            </div>
                        </div>
                        <div className='flex md:hidden'>
                            <button
                                type='button'
                                className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                                aria-controls="mobile-menu"
                                aria-expanded={IsMenuOpen}
                                onClick={() => setIsMenuOpen(!IsMenuOpen)}    
                            >
                                <span className='sr-only'>
                                    Opena Menu
                                </span>
                                <svg
                                    className={`h-6 w-6 ${
                                        IsMenuOpen ? 'hidden' : 'block'
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg
                                    className={`h-6 w-6 ${
                                    IsMenuOpen ? 'block' : 'hidden'
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={`md:hidden ${
                        IsMenuOpen ? 'block' : 'hidden'  
                    }`}
                    id='mobile-menu'
                >
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link href="/" className='block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50'>
                            Inicio
                        </Link>
                    </div>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link href="/about-me/" className='block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50'>
                            Sobre Mi
                        </Link>
                    </div>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link href="/contact" className='block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50'>
                            Contacto
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}