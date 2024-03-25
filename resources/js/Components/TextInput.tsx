import {
	forwardRef,
	useRef,
	useEffect,
	useImperativeHandle,
	InputHTMLAttributes
} from 'react'
import { twMerge } from 'tailwind-merge'

type Props = InputHTMLAttributes<HTMLInputElement> &
	Readonly<{ isFocused?: boolean }>

export default function weird() {}

export const TextInput = forwardRef(
	function TextInput(props: Props, ref) {
		const { type = 'text', className, isFocused = false, ...rest } = props
		const localRef = useRef<HTMLInputElement>(null);

		useImperativeHandle(ref, () => ({
			focus: () => localRef.current?.focus(),
		}));

		useEffect(() => {
			if (isFocused) {
				localRef.current?.focus();
			}
		}, []);

		return (
			<input ref={localRef} {...rest}
				className={
					twMerge('text-base leading-6 text-[rgb(143,144,166)] bg-[rgb(250,250,252)] border border-[rgb(228,228,235)] focus:border-indigo-500 focus:ring-indigo-500 rounded-lg', className)
				}
				type={type}
			/>
		)
	}
)
