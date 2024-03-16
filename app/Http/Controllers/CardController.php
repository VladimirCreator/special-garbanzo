<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

use App\Models\Card;

class CardController extends Controller {
	public function index() {
		return Inertia::render(
			'Card/Index',
			[
				'cards' => Card::all()
					-> map(
						fn($card) => [
							'id' => $card -> id,
							'card_number' => $card -> getFormattedNumber(),
							'expiration_date' => $card -> getFormattedExpirationDate(),
						]
					)
			]
		);
	}

	public function create(Request $request) {
		Card::create(
			Request::validate([
				'card_number' => ['required', 'min:16', 'max:16'],
				'cvv_cvc' => ['required', 'min:3', 'max:3'],
				'expiration_date' => ['required']
			])
		);

		return to_route('card.index');
	}
}
