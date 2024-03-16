<?php

use App\Http\Controllers\CardController;
use Illuminate\Support\Facades\Route;

Route::get('/', [CardController::class, 'index'])
	-> name('card.index');
Route::post('/', [CardController::class, 'create']);

require __DIR__.'/auth.php';
