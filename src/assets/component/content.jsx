// IMPORT
import { useState } from "react"
import { RiMore2Fill } from '@remixicon/react';


export default function Content() {
    return (
        <>
            <section className="relative h-96 w-full bg-primary flex items-center justify-center">
                <div className="relative w-full h-full max-w-7xl flex items-center flex-col">
                    <div className="absolute top-0 w-11/12 h-0.5 bg-option-5"></div>
                    <Menu/>
                </div>
            </section>
        </>
    )
}

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="relative mt-10 w-11/12 flex justify-between items-center gap-2">
                <div className="flex justify-between items-center gap-2">
                    <Filter content={'Latest'}/>
                    <Filter content={'Finance'}/>
                    <Filter content={'Minimalist'}/>
                    <button onClick={toggleOpen} className={`rounded-lg w-fit h-8 px-1 ml-1 text-white border-option-5 border hover:bg-option-6 transition-all cursor-pointer ${isOpen?'bg-secondary':'bg-primary'}`}>
                        < RiMore2Fill  />
                    </button>
                </div>
                <input type="text" placeholder="Type To Search" className="bg-secondary rounded-lg w-60 h-8 px-2 text-white border-option-5 border hover:bg-option-6 focus:outline-2 focus:outline-option-5 transition-all"/>
                <FilterMenu isOpen={isOpen}/>
            </div>
        </>
    )
} 

function Filter({content}) {
    const [isClicked, setIsClicked] = useState(false);

    function toggleClick() {
        setIsClicked(!isClicked)
    }
    return(
        <>
            <button onClick={toggleClick} className={` rounded-lg w-fit h-8 px-5 text-white border-option-5 border hover:bg-option-6 transition-all cursor-pointer ${isClicked?'bg-secondary':'bg-primary'}`}>
                {content}
            </button>
        </>
    )
}

function FilterMenu({isOpen}) {
    return(
        <>
            <div className={`absolute flex justify-center flex-wrap gap-2 px-3 py-3 max-w-[730px] bg-option-6 rounded-lg border-option-5 border transition-all ease-in-out duration-300 ${isOpen? 'opacity-100 top-10 pointer-events-auto': 'opacity-0 pointer-events-none top-12'}`}>
                <Filter content={'Hotel'}/>
                <Filter content={'Hottest'}/>
                <Filter content={'UMKM'}/>
                <Filter content={'Food'}/>
                <Filter content={'Restourant'}/>
                <Filter content={'Testing AJAH'}/>
            </div>
        </>
    )
}

function ProductsWrapper() {
    return(
        <>
            <div className="grid grid-cols-4 gap-4 w-full max-w-7xl h-fit py-5">

            </div>
        </>
    )
}

function Products() {
    return(
        <>
        
        </>
    )
}