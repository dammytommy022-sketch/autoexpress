<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/services', function () {
    return view('services');
});

Route::get('/how-it-works', function () {
    return view('how-it-works');
});

Route::get('/pricing', function () {
    return view('pricing');
});

Route::get('/faq', function () {
    return view('faq');
});

Route::get('/contact', function () {
    return view('contact');
});

Route::get('/dealer-program', function () {
    return view('dealer-program');
});

Route::get('/tracking', function () {
    return view('tracking');
});

Route::get('/terms', function () {
    return view('terms');
});

Route::get('/privacy', function () {
    return view('privacy');
});

Route::get('/refund-policy', function () {
    return view('refund-policy');
});

Route::get('/payment-policy', function () {
    return view('payment-policy');
});

Route::get('/pre-order-agreement', function () {
    return view('pre-order-agreement');
});
