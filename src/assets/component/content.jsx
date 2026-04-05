// IMPORT
import { RiArrowDownLongLine } from "@remixicon/react"


export default function Content() {
    return (
        <>
            <section className="relative h-96 w-full bg-primary flex items-center justify-center">
                <div className="relative w-full h-full max-w-7xl flex items-center flex-col">
                    <div className="absolute top-0 w-11/12 h-0.5 bg-option-5"></div>
                    <Menu/>
                    <div className="absolute flex flex-col items-center cursor-pointer h-max text-option-5">
                        <div className="w-1 h-20 bg-option-5 rounded-xs translate-y-2.5 transition-all ease-in-out duration-300"></div>
                        <RiArrowDownLongLine size={46} className="transition-all ease-in-out duration-300" />
                    </div>
                </div>
            </section>
        </>
    )
}

function Menu() {
    return (
        <>
            <div className="mt-10 w-11/12 flex justify-end items-center gap-2">
                <input type="text" placeholder="Type To Search" className="bg-primary rounded-lg w-60 h-8 px-2 text-white border-option-5 border hover:bg-option-6 focus:outline-2 focus:outline-option-5 transition-all"/>
            </div>
        </>
    )
} 