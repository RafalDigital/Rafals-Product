
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
    return (
        <>
            <div className="mt-10 w-11/12 flex justify-end items-center gap-2">
                <input type="text" placeholder="Type To Search" className="bg-primary rounded-lg w-60 h-8 px-2 text-white border-option-5 border hover:bg-option-6 active:scale-95 transition-all"/>
            </div>
        </>
    )
} 