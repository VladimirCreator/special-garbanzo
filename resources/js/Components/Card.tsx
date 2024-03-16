import { twMerge } from 'tailwind-merge'

enum Size {
	small, large
}

type PrivateProps = Readonly<{
	className?: string
}>

type Props = PrivateProps & Readonly<{
	children?: React.ReactNode
}>

function CreateCard(size: Size, props?: PrivateProps) {
	/// These properties are used by all cards.
	const sharedProps = {
		className: 'text-xs text-white flex flex-col'
	}
	/// `card` contains shared logic.
	const card = (privateProps: PrivateProps) => {
		const {
			className: addedClassName
		} = privateProps

		return (actualProps: Props & Record<string, unknown>) => {
			const {
				className,
				children
			} = actualProps
			return (
				<div className={twMerge(sharedProps.className, addedClassName, props?.className, className)}>
					<div className='grow' />
					{children}
				</div>
			)
		}
	}

	switch (size) {
		case Size.small:
			return card({ className: 'leading-5 items-center shrink-0 p-2 w-[116px] h-20 rounded-lg' })
		case Size.large:
			return card({ className: 'leading-4 p-5 w-72 md:w-[324px] h-52 rounded-xl' })
	}
}

export const Card = CreateCard(Size.small)
export const CardAdd = CreateCard(Size.small, { className: 'font-semibold text-sm leading-[22px] text-center h-[88px] text-[rgb(85,87,112)] p-3 bg-[rgb(242,242,245)] border-2 border-[rgb(62,123,250)] shadow-[inset_2px_2px_0px_white,inset_-2px_-2px_0px_white]' })
export const CardForm = CreateCard(Size.large)
