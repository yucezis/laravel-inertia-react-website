import { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';

export default function PortfolioCategories({ categories, products }) {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(product => product.category_id === activeCategory);

    return (
        <MainLayout>
            <Head title="Gallery" />
            <div className="min-h-screen w-full bg-white px-8 py-12">

                {/* Başlık */}
                <div className="mb-12 text-center">
                    <h1 className="text-6xl font-black tracking-tight leading-tight text-black">
                        NEW SCULPTURE <br />
                        <u>GALLERY IS OPENING</u> <br />
                        <u>SOON IN NANTES</u>
                    </h1>
                </div>
                <br />
                <div className="flex flex-wrap justify-start gap-6 font-semibold uppercase text-sm tracking-wider mb-10">
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={`relative ${
                            activeCategory === 'all' ? 'text-black' : 'text-gray-500'
                        }`}
                    >
                        ALL
                        {activeCategory === 'all' && (
                            <div className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400 rounded-full" />
                        )}
                    </button>

                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`relative ${
                                activeCategory === category.id ? 'text-black' : 'text-gray-500'
                            }`}
                        >
                            {category.name.toUpperCase()}
                            {activeCategory === category.id && (
                                <div className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400 rounded-full" />
                            )}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-auto rounded-lg shadow"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </MainLayout>
    );
}
