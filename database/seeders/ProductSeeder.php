<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name' => 'girl',
            'price' => 274,
            'category_id' => 1,
            'image' => '/images/girl1.png',
        ]);
        Product::create([
            'name' => 'the glory',
            'price' => 260,
            'category_id' => 1,
            'image' => '/images/girl3.png',
        ]);
        
        Product::create([
            'name' => 'green',
            'price' => 300,
            'category_id' => 3,
            'image' => '/images/green1.jpeg',
        ]);
        Product::create([
            'name' => 'forest',
            'price' => 200,
            'category_id' => 5,
            'image' => '/images/green2.jpeg',
        ]);
        Product::create([
            'name' => 'vibrant',
            'price' => 175,
            'category_id' => 4,
            'image' => '/images/images3.png',
        ]);
        Product::create([
            'name' => 'morning mist',
            'price' => 350,
            'category_id' => 4,
            'image' => '/images/images4.png',
        ]);
        Product::create([
            'name' => 'girl in white',
            'price' => 199,
            'category_id' => 2,
            'image' => '/images/images1.png',
        ]);
        Product::create([
            'name' => 'trapped',
            'price' => 100,
            'category_id' => 2,
            'image' => '/images/images2.png',
        ]);
    }
}
