import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Shop({ products, categories, activeCategory }) {
  return (
    <MainLayout>
      <Head title="Products" />

      <div className="flex flex-col lg:flex-row gap-8 p-6">
        <div className="flex-1">
          <div className="text-gray-600 mb-4">Showing 1–{products.length} of {products.length} results</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {products.map(product => (
              <div key={product.id}>
                <img
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-auto shadow-md"
                />
                <div className="mt-3 font-bold text-lg">{product.name.toUpperCase()}</div>
                <div className="text-gray-700">${parseFloat(product.price).toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-72 mt-9">
          
          <div className="font-black text-lg border-b pb-2 mb-3">FILTER BY PRICE</div>

            <div className="mb-6 space-y-2 text-sm">
              <Link
                  href={route('shop', { category: activeCategory, sort: 'asc' })}
                  className={`block text-gray-700 hover:text-black ${
                  route().params.sort === 'asc' ? 'font-bold underline' : ''
                }`}>
                  Price: Low to High
              </Link>

              <Link
                  href={route('shop', { category: activeCategory, sort: 'desc' })}
                  className={`block text-gray-700 hover:text-black ${
                  route().params.sort === 'desc' ? 'font-bold underline' : ''
                }`}>
                  Price: High to Low
              </Link>
            </div>

          <div className="font-black text-lg border-b pb-2 mb-3">CATEGORIES</div>
          <ul className="mb-6 space-y-1">
            <li>
              <Link
                href={route('shop')}
                className={`block text-gray-700 hover:text-black cursor-pointer ${
                !activeCategory ? 'font-bold underline' : ''
              }`}>
              All Categories
              </Link>
            </li>

            {categories.map(category => (
              <li key={category.id}>
              <Link
                href={route('shop', { category: category.id })}
                className={`block text-gray-700 hover:text-black cursor-pointer ${
                category.id == activeCategory ? 'font-bold underline' : ''
              }`}>
              {category.name} ({category.products_count})
              </Link>
              </li>))}
          </ul>

          <div className="font-black text-lg border-b pb-2 mb-3">PRODUCT TAGS</div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['Art', 'Color', 'Modern', 'Painting', 'Style'].map((tag, i) => (
              <span key={i} className="bg-black text-white px-2 py-1 text-xs">{tag}</span>
            ))}
          </div>

          <div className="font-black text-lg border-b pb-2 mb-3">PRODUCTS</div>
          <div className="space-y-4">
            {products.slice(0, 3).map(product => (
              <div key={product.id} className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 object-cover"
                />
                <div>
                  <div className="text-sm font-bold">{product.name.toUpperCase()}</div>
                  <div className="text-gray-700 text-sm">${parseFloat(product.price).toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

















