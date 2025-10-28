import { Link } from '@inertiajs/react';

export default function Home(){

    return(
        <div className="relative min-h-screen bg-white font-sans overflow-hidden z-10">
            <div className="absolute top-6 left-6 space-y-2 text-xs tracking-wide z-50">
                <a href="https://dribble.com" className="block hover:underline">DRIBBLE</a>
                <a href="https://instagram.com" className="block hover:underline">INSTAGRAM</a>
                <a href="https://behance.com" className="block hover:underline">BEHANCE</a>
            </div>

            <div className="absolute top-6 right-6 text-xs tracking-wide space-y-1 text-right z-50">
                <a href="/" className="block hover:underline">HOME</a>
                <a href="/portfolioCategories" className="block hover:underline">PORTFOLIO CATEGORIES</a>
                <Link href="/portfolio" className="block hover:underline">PORTFOLIO</Link>
                <a href="/blog" className="block hover:underline">BLOG</a>
                <Link href="/shop" className="block hover:underline">SHOP</Link>
            </div>

            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-sm tracking-widest">
                GINEVRA
            </div>

            <div className="pt-32 text-center z-10 relative">
                <h1 className="text-7xl md:text-8xl font-extrabold leading-none">CLARA</h1>
                <h1 className="text-7xl md:text-8xl font-extrabold leading-none -mt-2">GINEVRE</h1>
            </div>

            <div className="absolute bottom-0 left-0 w-full">
                <img
                    src="images/anasayfa.jpg"
                    alt="Waterface"
                    className="w-full object-cover max-h-[70vh] pointer-events-none select-none"
                />
            </div>

        </div>
    );
}