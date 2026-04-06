// IMPORT
import { useState } from "react"
import { RiMore2Fill } from '@remixicon/react';
import { useEffect } from "react";

const stackColors = {
  HTML: "15 100% 55%",
  CSS: "210 100% 50%",
  JavaScript: "50 100% 50%",
  React: "190 90% 60%",
  Tailwind: "190 90% 50%",
  NodeJS: "110 50% 40%",
};


export default function Content() {
    const [products, setProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(true)
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isClosing, setIsClosing] = useState(false);

    function handleClose() {
        setIsClosing(true);

        setTimeout(() => {
            setSelectedProduct(null);
            setIsClosing(false);
        }, 300); // harus sama dengan duration animasi
    }

    useEffect(() => {
        fetch('/data/products.json')
            .then(response => response.json())
            .then(data => {
                setProducts(data.Products);
                // setIsLoading(false);
                console.log(data.Products)
            });
    },([]))

    return (
        <>
            <section className="relative h-fit pb-10 w-full bg-primary flex items-center justify-center">
                <div className="relative w-full h-full max-w-7xl flex items-center flex-col">
                    <div className="absolute top-0 w-11/12 h-0.5 bg-option-5"></div>
                    <Menu/>
                    <ProductsWrapper products={products} setSelectedProduct={setSelectedProduct}/>
                </div>
            </section>
            {selectedProduct && (
                <FullProduct products={selectedProduct} close={handleClose} isClosing={isClosing}/>
            )}
        </>
    )
}

// MENU

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
            <div className={`shadow-xl absolute flex justify-center flex-wrap gap-2 px-3 py-3 max-w-[45.6rem] bg-option-6 rounded-lg border-option-5 border transition-all ease-in-out duration-300 ${isOpen? 'opacity-100 top-10 pointer-events-auto': 'opacity-0 pointer-events-none top-12'}`}>
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

// PRODUCT COMPONENT

function ProductsWrapper({ products, setSelectedProduct }) {
    return(
        <>
            <div className="grid grid-cols-4 gap-2 place-items-center w-full max-w-[75rem] h-fit py-5 mt-2.5">
                {products.map((p) => (
                    <Products key={p.Id} {...p} setSelectedProduct={setSelectedProduct}
                    // Stacks={[p.Stacks]} Sections={[p.Sections]} Title={p.Title} Desc={p.Desc} Image={p.Image} Button={p.Button}
                    />
                ))}
            </div>
        </>
    )
}

function Products({ Stacks = [], Sections = [], Title, Desc, Id, Image, Button, setSelectedProduct, Price }) {
    return(
        <>
            <div className="group bg-secondary border border-option-5 rounded-2xl overflow-hidden w-11/12 px-0.5 pt-3 max-w-xs transition-all hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden w-11/12 mx-auto border border-option-5 rounded-md">
                    <img src={Image} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 border-none rounded-md"/>
                </div>
                <div className="p-4 flex flex-col gap-2">
                    <h1 className="text-white font-semibold text-lg">{Title}</h1>
                    <p className="text-white text-sm line-clamp-2">{Desc}</p>
                    <div className="w-full flex gap-1">
                        {Stacks.slice(0, 3).map((stack, index) => (
                            <Stack stack={stack} key={index}/>
                        ))}
                        {Stacks.length > 3 && (
                            <span className="text-white text-sm">+{Stacks.length - 3}</span>
                        )}
                    </div>
                    <p className="text-xl my-0 text-option-1 font-medium"><span>$</span>{Price}</p>

                    <button onClick={() => setSelectedProduct({Stacks, Sections, Title, Desc, Id, Image, Button, Price})} className="mt-1 bg-primary rounded-lg py-1.5 text-white border-option-5 border hover:bg-option-6 active:scale-95 transition-all cursor-pointer">{Button}</button>
                </div>
            </div>
        </>
    )
}

function Stack({index, stack}) {
     const color = stackColors[stack] || "0 0% 40%";

    return(
        <>
            <span
            key={index}
            className="flex items-center text-[10px] px-2 py-0.5 rounded-md"
            style={{
                backgroundColor: `hsl(${color} / 0.15)`, // soft bg
                border: `1px solid hsl(${color} / 0.4)`,
                color: `hsl(${color})`,
            }}
            >
            {stack}
            </span>
        </>
    )
}

function Section({index, section = []}) {
    return(
        <>
            <span
            key={index}
            className="flex items-center text-[10px] text-white px-2 py-0.5 rounded-md bg-option-6 border border-option-5"
            >
            {section}
            </span>
        </>
    )
}

// FULL INFO PRODUCT COMPONENT
function FullProduct({ products, close, isClosing }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return(
        <>
            <div onClick={close} key={products.Id} className={`fixed w-full h-dvh bg-black/50 z-20 flex justify-center items-center ${show ? "opacity-100" : "opacity-0"} transition-all duration-300 ease-in-out  ${isClosing? "opacity-0" : "opacity-100"}`}>
                <div onClick={(e) => e.stopPropagation()} className={`overflow-hidden relative h-[80dvh] max-h-[500px] w-5xl py-5 px-5 bg-secondary rounded-xl border border-option-5 flex gap-10 ${show ? "scale-100" : "scale-90 blur-xl"} transition-all duration-300 ease-in-out ${isClosing? "opacity-0 scale-75 blur-xl": "opacity-100 scale-100"}`}>
                    <div className="w-full h-full">
                        <div className="group w-full h-10/12 overflow-hidden border border-option-5 rounded-lg">
                            <img src={products.Image} className="w-full h-full group-hover:scale-105"/>
                        </div>
                            <h1 className="text-white font-semibold text-3xl mt-5 ml-2 font-playfairdisplay">{products.Title}</h1>
                        
                    </div>

                    <div className="w-0.5 h-11/12 absolute bg-option-5 left-1/2 -translate-x-1/2 rounded-md"></div>

                    <div className="w-full h-full flex flex-col justify-between">
                        <div className="h-3/4 flex flex-col">

                            <div className="h-fit pb-2.5 max-h-3/4">
                                <p className="text-white text-base font-medium mb-2">Desc</p>
                                <p className="text-white text-sm">{products.Desc}</p>
                                <div className="h-0.5 w-full rounded-2xl bg-option-5 mt-2.5"></div>
                            </div>

                            <div className="pb-2.5">
                                <p className="text-white text-base font-medium mb-2">Stacks</p>
                                <div className="w-full flex gap-1">
                                    {products.Stacks.map((stack, index) => (
                                    <Stack stack={stack} key={index}/>
                                    ))}
                                </div>
                                <div className="h-0.5 w-full rounded-2xl bg-option-5 mt-2.5"></div>
                            </div>

                            <div>
                                <p className="text-white text-base font-medium mb-2">Features</p>
                                <div className="w-full flex gap-1">
                                    {products.Sections.map((section, index) => (
                                    <Section key={index} section={section}/>
                                    ))}
                                </div>
                                <div className="h-0.5 w-full rounded-2xl bg-option-5 mt-2.5"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <p className="text-xl text-option-1 font-medium"><span>$</span>{products.Price}</p>
                            <a href={products.LinkSite} className="text-center mt-1 bg-primary rounded-lg py-1.5 text-white border-option-5 border hover:bg-option-6 active:scale-95 transition-all cursor-pointer">Visit Preview</a>
                            <a href={products.PurchaseLink} className="text-center mt-1 bg-option-1 rounded-lg py-1.5 text-white border-option-1 border hover:bg-option-6 active:scale-95 transition-all cursor-pointer">Buy</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}