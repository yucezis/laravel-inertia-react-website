import { useForm } from '@inertiajs/react';

export default function CreateProduct({ categories }) {
  const { data, setData, post, errors, processing } = useForm({
    name: '',
    price: '',
    category_id: '',
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/admin/products');
  };

  return (
    
    <div className="mt-15 ml-20">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block font-medium">Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
          />
          {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
        </div>

        <div className="mb-4">
          <label className="block font-medium">Price</label>
          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            value={data.price}
            onChange={(e) => setData('price', e.target.value)}
          />
          {errors.price && <div className="text-red-500 text-sm">{errors.price}</div>}
        </div>

        <div className="mb-4">
          <label className="block font-medium">Category</label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={data.category_id}
            onChange={(e) => setData('category_id', e.target.value)}
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
          {errors.category_id && <div className="text-red-500 text-sm">{errors.category_id}</div>}
        </div>

        <div className="mb-4">
          <label className="block font-medium">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setData('image', e.target.files[0])}
          />
          {errors.image && <div className="text-red-500 text-sm">{errors.image}</div>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
      <br />
      <a
      href="/shop"
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Shop
      </a>
    </div>
  );
}
