export default function Footer() {
    return(
        <>
            <section className="relative h-fit w-full bg-primary flex items-center flex-col">

                <svg class="animate-spin -ml-1 mr-3 h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="#434340" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-xl font-medium text-white mt-2">looks like it's the end</p>

                <div className="w-11/12 max-w-7xl h-0.5 bg-option-5 rounded-2xl mt-6"></div>

                <div className="w-full h-fit py-5 bg-secondary mt-6">
                    <div className="max-w-7xl w-full h-fit mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">

                    {/* BRAND */}
                    <div>
                        <h1 className="text-white font-bold text-lg">RafalDigital</h1>
                        <p className="text-white text-sm mt-2">High quality web templates for developers.</p>
                    </div>

                    {/* PRODUCT */}
                    <div>
                        <h2 className="text-white font-semibold mb-2">Products</h2>
                        <ul className="text-white text-sm space-y-1">
                            <li>Templates</li>
                            <li>UI Kits</li>
                            <li>Freebies</li>
                        </ul>
                    </div>

                    {/* SUPPORT */}
                    <div>
                        <h2 className="text-white font-semibold mb-2">Support</h2>
                        <ul className="text-white text-sm space-y-1">
                            <li>Contact</li>
                            <li>FAQ</li>
                            <li>Privacy</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h2 className="text-white font-semibold mb-2">Start</h2>
                        <button className="bg-primary px-4 py-2 rounded-lg text-white border border-option-5 hover:bg-option-6 transition-all">Explore Products</button>
                    </div>
            
            </div>

                    {/* bottom bar */}
                    <div className="border-t border-option-5 pt-4 text-center text-white text-sm">
                        © 2026 RafalDigital. All rights reserved.
                    </div>

                </div>
            </section>
        </>
    )
}