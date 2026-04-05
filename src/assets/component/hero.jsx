// IMPORT
import { RiInstagramLine, RiGithubLine, RiArrowDownLongLine } from '@remixicon/react';

export default function Hero() {
    return (
        <>
            <section className="relative h-dvh max-h-[500px] w-full bg-linear-to-b from-option-3 to-primary flex items-center justify-center">
                <div className="relative w-11/12 h-10/12 max-w-7xl bg-secondary border-option-5 border flex items-center justify-center flex-col rounded-4xl">
                    <h1 className="text-white text-5xl font-playfairdisplay font-bold">RAFAL'S PRODUCTS</h1>
                    <p className="text-white">Web Templates and More</p>
                    <div className="absolute w-full bottom-2 left-8 right-8 flex gap-2.5">
                        <Link logo={RiInstagramLine} size={16}/>
                        <Link logo={RiGithubLine} size={16}/>
                    </div>
                    <div className="group absolute flex flex-col items-center cursor-pointer h-max text-white right-10 top-20">
                        <div className="w-1 h-20 bg-white rounded-xs translate-y-2.5 transition-all ease-in-out duration-300 group-hover:h-40"></div>
                        <RiArrowDownLongLine size={46} />
                        <p>Scroll</p>
                        <p>Down</p>
                    </div>
                </div>
            </section>
        </>
    )
}

function Link({size, logo}) {
const Logo = logo;

    return (
        <>
        <a href="#" className="group relative flex items-center justify-center bg-primary rounded-lg w-8 h-8 text-white border-option-5 border hover:bg-option-6 active:scale-95 transition-all">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-option-5 rounded-full opacity-0 translate-y-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-3"></span>
        <Logo size={size} />
        </a>
        </>
    )
}

