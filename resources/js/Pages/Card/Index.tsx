import { FormEvent, useRef } from 'react'
import { Head, useForm } from '@inertiajs/react'

import { Card, CardAdd } from '@/Components/Card'
import { CardForm } from '@/Components/CardForm'
import { PageProps } from '@/types'

export default function Welcome(props: { cards: any[] } & PageProps<{ laravelVersion: string, phpVersion: string }>) {
	const { auth, laravelVersion, phpVersion, cards = [] } = props

	const { data, setData, post, processing } = useForm({
		card_number: '',
		expiration_year: '',
		expiration_month: '',
		expiration_date: '',
		cvv_cvc: '',
		targetNumber: 0
	})

	function handleChange(e: FormEvent<HTMLFormElement>) {
		const { target } = e
		const hasId = 'id' in target
		const hasValue = 'value' in target
		if (!hasId || !hasValue) {
			return
		}
		setData((prev) => ({ ...prev,
			// @ts-expect-error
			[target.id]: target.value,
			expiration_date: `20${prev.expiration_year}-${prev.expiration_month.padStart(2, '0')}-01`
		}))
		console.log(data)
	}

	function handleSubmit(e: FormEvent<HTMLFormElement>) { e.preventDefault()
		post('/')
	}

	return (
		<>
			<Head title='Баланс' />
			<form onSubmit={handleSubmit} onChange={handleChange} className='flex flex-col
				space-y-[30px]
				max-w-[90%]
				mx-auto

				md:max-w-[71.6145833333%]
				xl:max-w-[38.1944444444%]
				md:p-10
				md:border md:border-[rgb(242,242,245)]
				md:rounded-xl
				md:shadow-[0_8px_16px_0_rgba(85,87,112,0.16),0_2px_4px_0_rgba(40,41,61,0.04)]
				'
			>
				<h1 className='
					font-medium text-[22px] leading-7 text-[rgb(40,41,61)]
					md:text-2xl md:leading-[30px]
				'>Пополнить банковской картой</h1>

				<div className='text-xs text-[rgb(85,87,112)] space-y-6'>
					<div className='flex flex-col space-y-2 uppercase'>
						<label>
							Укажите сумму
						</label>
						<div className='max-w-72 flex justify-between border p-4 text-[rgb(143,144,166)] bg-[rgb(250,250,252)] border-[rgb(228,228,235)] rounded-lg'>
							<div className='flex w-36'>
								<input id='targetNumber' className='w-full p-0 border-0 bg-transparent' placeholder='0000.00' type='text' />
								<select className='p-0 pr-0 mr-4 border-0 bg-transparent'>
									<option>ֆ</option>
								</select>
							</div>
							<div className='flex w-36'>
								<input className='w-full p-0 border-0 bg-transparent' placeholder={`${data.targetNumber !== 0 ? data.targetNumber * 15 : '0000.00'}`} type='text' disabled />
								<select className='p-0 pr-8 border-0 bg-transparent'>
									<option>₽</option>
								</select>
							</div>
						</div>
					</div>

					<div className='space-x-2 md:space-x-4 overflow-x-scroll flex items-center'>
						{
							cards.map(
								(card) => (
									<Card key={card.card_number} className='bg-[rgb(102,152,250)]'>
										<p>{card.card_number}</p>
										<p className='whitespace-pre'>{card.expiration_date}</p>
									</Card>
								)
							)
						}
						<CardAdd>
							<img width={28} height={28} src='https://static-00.iconduck.com/assets.00/plus-sign-icon-256x256-n6e09uet.png' />
							<button disabled={processing} children='Новая карта' />
						</CardAdd>
					</div>

					<CardForm />

					<div className='text-xs leading-5 text-[rgb(85,87,112)] md:text-sm leading-[22px]'>
						<label className='flex space-x-3'>
							<input type='checkbox' />
							<span>
								<p>Запомнить эту карту. Это безопасно. <img className='inline align-baseline' width={20} height={20} src='https://static-00.iconduck.com/assets.00/info-empty-icon-256x256-zczxdgxy.png' /></p>
								<p className='md:w-max'>Сохраняя карту, вы соглашаетесь с <a className='text-[#3E7BFA]'>условиями привязки карты</a>.</p>
							</span>
						</label>
					</div>
				</div>

				<button className='
					py-[14px] px-[32px]
					md:max-w-[141px]

					font-semibold
					text-white bg-[rgb(62,123,250)]
					rounded-full
				'
						type='button'
				>Оплатить</button>
			</form>
		</>
	);
}
