import { CardForm as FormAsCard } from './Card'
import { TextInput } from '@/Components/TextInput'

export function CardForm() {
	return (
		<div className='md:h-52 max-w-max md:max-w-none flex flex-col-reverse md:flex-col md:flex-row justify-center md:relative bg-[rgb(235,235,240)] md:bg-transparent rounded-b-lg md:rounded-none'>
			<FormAsCard className='max-h-[102px] md:max-h-[200px]
				md:absolute
				md:left-[157.84px]
				bg-[rgb(235,235,240)]
				md:bg-[linear-gradient(180deg,rgb(235,235,240)10%,rgb(199,201,217)10%,rgb(199,201,217)30%,rgb(235,235,240)30%)]
				'
			>
				<label className='text-[rgb(143,144,166)] md:w-[36.6197183099%] md:self-end space-y-2'>
					<span className='text-[rgb(85,87,112)]'>CVV/CVC</span>
					<span className='flex md:flex-col space-x-2 md:space-x-0 md:space-y-2'>
						<TextInput id='cvv_cvc' className='max-w-[72px] h-[38px] grow-0 shrink' placeholder='000' minLength={3} maxLength={3} />
						<span className='text-[10px] leading-[14px] max-w-[104px] grow'>
							три цифры<br />с обратной стороны карты
						</span>
					</span>
				</label>
			</FormAsCard>
			<FormAsCard className='space-y-4 md:absolute md:left-0 bg-[linear-gradient(135deg,rgb(166,200,255),rgb(0,67,206))]'>
				<div>
					<label className='space-y-2 uppercase'>
						<span>Номер карты</span>
						<TextInput title='Только цифры' id='card_number' className='h-[38px]' placeholder='Номер карты' minLength={16} maxLength={16} pattern='[0-9]*' required />
					</label>
				</div>
				<div>
					<label className='space-y-2 uppercase'>
						<span>Действует до</span>
						<p className='flex align-center space-x-1'>
							<TextInput id='expiration_month' className='max-w-[72px] h-[38px]' placeholder='мм' type='number' min={new Date().getMonth()+1} max={12} />
							<span className='text-base'>/</span>
							<TextInput id='expiration_year' className='max-w-[72px] h-[38px]' placeholder='гг' type='number' min={new Date().getFullYear().toString().substring(2)} />
						</p>
					</label>
				</div>
			</FormAsCard>
		</div>
	)
}
