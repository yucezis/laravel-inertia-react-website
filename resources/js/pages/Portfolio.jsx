import { Link, usePage } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';

export default function Portfolio() {
    const { products, categories, activeCategory } = usePage().props;

    return (
      <MainLayout>
        <div className="bg-[#fdfcf8] text-black min-h-screen">
            
            <main className="relative flex flex-col items-center justify-center px-4 text-center mt-10">
        <div className="relative w-[350px] h-[450px] mb-8">
          <img
            src="/images/portfolio2.jpg"
            className="w-full h-full object-cover rounded-md"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-7xl font-semibold tracking-wide text-black whitespace-nowrap">
              MARIE ARNAUD
            </h2>
          </div>
          
        </div>
        
        <p className="max-w-5xl font-semibold tracking-wide text-xl mt-10 leading-relaxed">
            THROUGH MY ART, THE USE OF <br />
            COLORS & SHAPES, I EXPRESS <br />
          MYSELF IN THE BEST POSSIBLE WAY – <br />
               NO WORDS NECESSARY <br />
        </p>
      </main>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
        <img src="/images/girl1.png" alt="img1" className="w-full h-auto object-cover" />
        <img src="/images/girl3.png" alt="img2" className="w-full h-auto object-cover" />
        <img src="/images/man.png" alt="img3" className="w-full h-auto object-cover" />
      </div>
      
        </div>
       <marquee behavior="scroll" scrollamount="30" direction="left" style={{ fontSize: '120px', fontFamily:'Times new roman'}}>
             LOOKING TO INSPIRE OTHERS ALWAYS
       </marquee>
       <marquee behavior="scroll" scrollamount="30" direction="right" style={{ fontSize: '120px' , fontFamily:'Times new roman'}}>
             LOOKING TO INSPIRE OTHERS ALWAYS
       </marquee>
       <marquee behavior="scroll" scrollamount="30" direction="left" style={{ fontSize: '120px' , fontFamily:'Times new roman'}}>
             GIVING DEEPER MEANING TO MODERN ART
       </marquee>



        </MainLayout>
    );
}

