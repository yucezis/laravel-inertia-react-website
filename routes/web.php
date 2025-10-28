<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\SubscriberController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/shop', [ProductController::class, 'indexshop'])->name('shop');

Route::get('/portfolio', [ProductController::class, 'index'])->name('products.index');

Route::get('/portfolioCategories', [ProductController::class, 'portfolioCategories'])->name('portfolioCategories');

Route::get('/blog', function () {
    return Inertia::render('Blog');
})->name('blog');

Route::get('/admin/create', [ProductController::class, 'create'])->name('products.create');
Route::post('/admin/products', [ProductController::class, 'store'])->name('products.store');

//Route::post('/admin/email', [EmailController::class, 'store']);

Route::get('/admin/email', function () {
    return Inertia::render('Email');
})->name('email');
