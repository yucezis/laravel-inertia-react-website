import MainLayout from '@/layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Blog() {
    return (
        <MainLayout>
            <Head title="Extensions of Media in Art" />

            <div className="bg-[#FAF9F2] py-4 px-8 text-sm text-gray-600">
                Home / Illustrations /{' '}
                <a href="/" className="text-gray-800 underline">
                    Extensions of Media in Art
                </a>
            </div>

            <div className="px-8 py-12 bg-white">
                <img
                    src="/images/foto5.png"
                    alt="Main Art"
                    className="w-full h-auto mb-10 rounded-md shadow"
                />

                <div className="text-sm text-gray-500 mb-4">
                    24 Dec 2021 / Illustrations / by {' '}
                    <a href="/" className="text-gray-800 underline">
                    Clara Saovine
                    </a>
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-black mb-6">
                    EXTENSIONS OD MEDIA IN ART
                </h1>

                <div className="text-gray-700 space-y-6 text-lg">
                    <p>
                        Lorem ipsum dolor sit amet, at eos re pudiare ad versa ium. E um doming pericula eu,
                         harum simul scaevola cu sit, vim an so net la oreet. Aperiam ato morum at pri.
                          In pro la bore con tentiones medi ocritat em, mea et perci pit interes set, 
                          mei et vocibus elige di vivend um. Post ea audire vix ei, nulla negle gen tur te duo, 
                          mole stie con cluda turque per at. An natum pha edrum mi edio crem nam, quo ad posse 
                          dicam eirmod. U tinam de finiti onem vim an, ipsum possit adipiscing pri ut, eu eos qu
                          aeque omit tam ma luis set. In quo suas ferri dispu tationi, invidu nt laboramu s vim no,
                          cum ne pro mpta diceret veritu.
                    </p>
                
                    <blockquote className="relative text-2xl italic text-gray-800 font-light pl-16 py-6 border-l-4 border-black">
                    <span className="absolute left-0 top-0 text-7xl font-serif font-bold text-black leading-none">“</span>
                        Creativity doesn’t wait for that perfect moment.
                        It fashions its own perfect moments out of ordinary ones.
                    </blockquote>

                    <p>
                        Lorem ipsum dolor sit amet, at eos re pudiare ad versa ium.
                         E um doming pericula eu, harum simul scaevola cu sit,
                        vim an so net la oreet. Aperiam ato morum at pri. 
                        In pro la bore con tentiones medi ocritat em, mea et perci
                        pit interes set, mei et vocibus elige di vivend um.
                            Post ea audire vix ei, nulla negle gen tur te duo,
                             mole stie con cluda turque per at. An natum pha 
                             edrum mi edio crem nam, quo ad posse dicam eirmod.
                              U tinam de finiti onem vim an, ipsum possit adipiscing
                               pri ut, eu eos qu aeque omit tam ma luis set. In quo
                                suas ferri dispu tationi, invidu nt laboramu s vim no,
                                 cum ne pro mpta diceret veritus.
                    </p>

                    <h2 className="text-3xl font-bold mt-6">ART IS THE BIG JOURNEY</h2>
                    <p>
                        Lorem ipsum dolor sit amet, at eos re pudiare ad versa ium.
                         E um doming pericula eu, harum simul scaevola cu sit,
                          vim an so net la oreet. Aperiam ato morum at pri. In pro
                           la bore con tentiones medi ocritat em, mea et perci pit
                            interes set, mei et vocibus elige di vivend um. Post ea 
                            audire vix ei, nulla negle gen tur te duo, mole stie con
                             cluda turque per at. An natum pha edrum mi edio crem nam,
                              quo ad posse dicam eirmod. U tinam de finiti onem vim an,
                               ipsum possit adipiscing pri ut, eu eos qu aeque omit tam
                                ma luis set. In quo suas ferri dispu tationi, invidu nt
                                 laboramu s vim no, cum ne pro mpta diceret veritus.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6">
                        <img src="/images/girl1.png" alt="" className="rounded-md shadow" />
                        <img src="/images/girl3.png" alt="" className="rounded-md shadow" />
                        <img src="/images/man.png" alt="" className="rounded-md shadow" />
                    </div>

                    <h2 className="text-3xl font-bold mt-6">HOW TO SIMPLIFY A SUBJECT</h2>
                    <p>
                        Lorem ipsum dolor sit amet, at eos re pudiare ad versa ium.
                         E um doming pericula eu, harum simul scaevola cu sit, vim an
                          so net la oreet. Aperiam ato morum at pri. In pro la bore con
                           tentiones medi ocritat em, mea et perci pit interes set, 
                           mei et vocibus elige di vivend um. Post ea audire vix ei,
                            nulla negle gen tur te duo, mole stie con cluda turque per at.
                             An natum pha edrum mi edio crem nam, quo ad
                    </p>
                    
                    <p>
                        pro la bore con tentiones medi ocritat em, mea et perci pit interes
                         set, mei et vocibus elige di vivend um. Post ea audire vix ei, nulla
                          negle gen tur te duo, mole stie con cluda turque per at. An natum
                           pha edrum mi edio crem nam, quo ad
                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">
                        {['Art', 'Design', 'Digital', 'Modern', 'Style'].map(tag => (
                            <span
                                key={tag}
                                className="bg-black text-white px-4 py-2 text-xs font-semibold tracking-widest"
                            >
                                {tag.toUpperCase()}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="bg-[#FAF9F2] mt-12 p-6 flex items-center gap-6">
                    <img
                        src="/images/girl4.png"
                        className="w-20 h-20 rounded object-cover"
                        alt="author"
                    />
                    <div>
                        <h3 className="font-bold text-lg">CLARA SAOVINE</h3>
                        <p className="text-sm text-gray-700">
                            Duis sed odio sit amet nibh nec tellus a odio vulputate cursus a sit amet
                            mauris. Morbi accumsan nec tellus.
                        </p>
                        <div className="flex gap-4 mt-2 text-sm text-gray-600 underline">
                            <a href="https://facebook.com">Facebook</a>
                            <a href="https://twitter.com">Twitter</a>
                            <a href="https://instagram.com">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>
    );
}
