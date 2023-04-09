import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { Appbar } from '@/components/Appbar/Appbar'

import avatar from '../../../public/imgs/avatar.jpg'

import Footer from '@/components/Footer/Footer'

export default function Home() {

    const [DataMessage, SetDataMessage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          SetDataMessage([
            {
                avatar:avatar,
                id:'1',
                open:false,
                hora:'1:30 A. M.',
                tittle:"Club de Caballeros",
                message_body:"Cada día van niños a la licorería con identificaciónes faltas y todas dicen que tienen 21, cuántos chicos de 21 creen que hay en este pueblo, a eso se le llama estrategia"
            },
            {
                avatar:avatar,
                id:'2',
                open:false,
                hora:'1:30 A. M.',
                tittle:"Club de Caballeros",
                message_body:"Cada día van niños a la licorería con identificaciónes faltas y todas dicen que tienen 21, cuántos chicos de 21 creen que hay en este pueblo, a eso se le llama estrategia"
            },
            {
                avatar:avatar,
                id:'2',
                open:false,
                hora:'1:30 A. M.',
                tittle:"Club de Caballeros",
                message_body:"Cada día van niños a la licorería con identificaciónes faltas y todas dicen que tienen 21, cuántos chicos de 21 creen que hay en este pueblo, a eso se le llama estrategia"
            },
            {
                avatar:avatar,
                id:'2',
                open:false,
                hora:'1:30 A. M.',
                tittle:"Club de Caballeros",
                message_body:"Cada día van niños a la licorería con identificaciónes faltas y todas dicen que tienen 21, cuántos chicos de 21 creen que hay en este pueblo, a eso se le llama estrategia"
            },
            {
                avatar:avatar,
                id:'2',
                open:false,
                hora:'1:30 A. M.',
                tittle:"Club de Caballeros",
                message_body:"Cada día van niños a la licorería con identificaciónes faltas y todas dicen que tienen 21, cuántos chicos de 21 creen que hay en este pueblo, a eso se le llama estrategia"
            },
            {
                avatar:avatar,
                id:'2',
                open:false,
                hora:'1:30 A. M.',
                tittle:"Club de Caballeros",
                message_body:"Cada día van niños a la licorería con identificaciónes faltas y todas dicen que tienen 21, cuántos chicos de 21 creen que hay en este pueblo, a eso se le llama estrategia"
            },
            {
                avatar:avatar,
                id:'2',
                open:false,
                hora:'1:30 A. M.',
                tittle:"Club de Caballeros",
                message_body:"Cada día van niños a la licorería con identificaciónes faltas y todas dicen que tienen 21, cuántos chicos de 21 creen que hay en este pueblo, a eso se le llama estrategia"
            },
            {
                avatar:avatar,
                id:'2',
                open:false,
                hora:'1:30 A. M.',
                tittle:"Club de Caballeros",
                message_body:"Cada día van niños a la licorería con identificaciónes faltas y todas dicen que tienen 21, cuántos chicos de 21 creen que hay en este pueblo, a eso se le llama estrategia"
            }
          ])
        };        
        fetchData();
    }, []);

    return (
        <>
            <div className='w-full h-screen flex '>
                <div className='w-[30%] h-full flex flex-col bg-[#202c33]'>
                    <div className='w-full h-auto flex justify-between bg-[#202c33] px-4 py-3 '>
                        <Image
                            src={avatar}
                            alt="Picture of the author"
                            width={40}
                            height={40}
                            className='rounded-full'
                        />
                        <div className='flex w-auto h-full justify-center items-center  justify-items-center gap-4'>
                            <button className='bg-[#aebac1] px-4 py-2 rounded-md text-gray-800 hover:text-black hover:bg-white'>
                                Nuevo Chat!
                            </button>
                            <button className='bg-[#aebac1] px-4 py-2 rounded-md text-gray-800 hover:text-black hover:bg-white'>
                                Opciones
                            </button>
                        </div>
                    </div>
                    <div className='w-full h-full flex flex-col bg-[#111b21] overflow-y-auto scrollbar'>
                        <div className='p-4 py-2 w-full'>
                            <input type="text" placeholder='Busca un chat o inicia uno nuevo.' className='bg-[#202c33] w-full rounded-md px-4 py-2 focus:outline-none text-white' />
                        </div>
                        {
                            DataMessage ? (
                                DataMessage.map((task, index) => (
                                    <div  key={index} className=' cursor-pointer border-b border-[#374045] w-full h-auto px-4 py-3 g-[#202c33] flex justify-start items-center justify-items-center gap-5 hover:bg-[#202c33]'>
                                        <Image
                                            src={task.avatar}
                                            alt="Picture of the author"
                                            width={55}
                                            height={55}
                                            className='rounded-full'
                                        />
                                        <div className=' w-[100%] flex flex-col justify-start items-start justify-items-center'>
                                            <div className='w-full flex justify-between '>
                                                <h3 className='text-white'> { task.tittle } </h3>
                                                <h3 className='text-[#aebac1]'> { task.hora } </h3>
                                            </div>
                                            <span className='text-[#aebac1] mb-2 h-11 overflow-hidden '> { task.message_body } </span>
                                        </div>
                                    </div>
                                ))
                            ) : null 
                        }
                    </div>
                </div>
                <div className='w-[70%] h-full bg-[#202c33] border-l border-[#374045] flex flex-col '>
                    <div className='w-full h-11 bg-[#202c33] flex justify-between items-center justify-items-center px-4 py-8'>
                        <div className='w-auto flex gap-5'>
                            <Image
                                src={avatar}
                                alt="Picture of the author"
                                width={50}
                                height={50}
                                className='rounded-full'
                            />
                            <div className='flex flex-col text-white'>
                                <h3>
                                    Club de Caballeros
                                </h3>
                                <p className='text-[#aebac1]'>
                                    Brayan, Ingeniero, Parada, Richy, Tu
                                </p>
                            </div>
                        </div>
                        <div className='flex w-auto h-full justify-center items-center  justify-items-center gap-4'>
                            <button className='bg-[#aebac1] px-4 py-2 rounded-md text-gray-800 hover:text-black hover:bg-white'>
                                Nuevo Chat!
                            </button>
                            <button className='bg-[#aebac1] px-4 py-2 rounded-md text-gray-800 hover:text-black hover:bg-white'>
                                Opciones
                            </button>
                        </div>
                    </div>
                    <div className='w-full h'>
                        
                    </div>
                </div>
            </div>
        </>
    )
}