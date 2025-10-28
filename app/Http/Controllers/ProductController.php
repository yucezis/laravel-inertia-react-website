<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Category;

class ProductController extends Controller
{
    
    public function indexshop(Request $request)
    {
    $categoryId = $request->query('category');
    $sort = $request->query('sort');

    $products = Product::with('category')
        ->when($categoryId, function ($query, $categoryId) {
            return $query->where('category_id', $categoryId);
        })
        ->when($sort === 'asc' || $sort === 'desc', function ($query) use ($sort) {
            return $query->orderBy('price', $sort);
        })
        ->get();

    $categories = Category::withCount('products')->get();

    return Inertia::render('Shop', [
        'products' => $products,
        'categories' => $categories,
        'activeCategory' => $categoryId
    ]);
    }

    public function index(Request $request)
    {
    $category = $request->query('category');

    $categories = Category::all();
    $products = Product::with('category')
        ->when($category, function ($query) use ($category) {
            $query->whereHas('category', fn($q) => $q->where('name', $category));
        })
        ->get();

    return Inertia::render('Portfolio', [
        'products' => $products,
        'categories' => $categories,
        'activeCategory' => $category
    ]);
    }

    public function portfolioCategories()
    {
     return Inertia::render('PortfolioCategories', [
        'categories' => Category::all(),
        'products' => Product::all(),
    ]);
    }
    
    public function create()
    {
        $categories = Category::select('id', 'name')->get();
        return Inertia::render('Admin/CreateProduct', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'category_id' => 'required|exists:categories,id',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        
        $imageName = time() . '.' . $request->image->extension();
        $request->image->move(public_path('images'), $imageName);

        Product::create([
            'name' => $validated['name'],
            'price' => $validated['price'],
            'category_id' => $validated['category_id'],
            'image' => '/images/' . $imageName,
        ]);

        return redirect()->route('products.create')->with('success', 'Product created successfully.');
    }
    

     public function edit(Product $product)
     {
        $categories = Category::select('id', 'name')->get();
        return Inertia::render('Admin/Products/Edit', [
            'product' => $product,
            'categories' => $categories,
        ]);
     }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'category_id' => 'required|exists:categories,id',
            'image' => 'nullable|image|max:2048'
        ]);

        if ($request->hasFile('image')) {
            
            if ($product->image) {
                Storage::delete($product->image);
            }
            
            $path = $request->file('image')->store('public/products');
            $validated['image'] = $path;
        }

        $product->update($validated);

        return redirect()->route('admin.products.index')->with('success', 'Ürün başarıyla güncellendi');
    }

    public function destroy(Product $product)
    {
        if ($product->image) {
            Storage::delete($product->image);
        }
        $product->delete();

        return redirect()->route('admin.products.index')->with('success', 'Ürün başarıyla silindi');
    }

}
