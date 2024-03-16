<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Carbon\Carbon;

class Card extends Model {
	use HasFactory;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array<int, string>
	 */
	protected $fillable = [
		'card_number',
		'expiration_date',
		'cvv_cvc',
	];

	/**
	 * The attributes that should be hidden for serialization.
	 *
	 * @var array<int, string>
	 */
	protected $hidden = [
		'id'
	];

	public function getFormattedNumber() {
		return "••••" . " " . substr($this -> card_number, -4);
	}

	public function getFormattedExpirationDate() {
		$dateComponents = explode("-", $this -> expiration_date);
		return $dateComponents[1] . " / " . $dateComponents[0];
	}
}
