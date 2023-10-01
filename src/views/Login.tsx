import { SignInForm, SignUpForm } from '@/components';
import { SCREEN_MODE } from '@/constants/Login';
import { TModeLogin } from '@/types/views';
import { Box } from '@mantine/core';
import { useState } from 'react';

const Login = () => {
	const [left, setLeft] = useState<number | string>(0);
	const [right, setRight] = useState<number | string>('unset');
	const [width, setWidth] = useState<number>(0);
	const [currMode, setCurrMode] = useState<TModeLogin>(SCREEN_MODE.SIGN_IN);

	const onSwitchMode = (mode: TModeLogin) => {
		setWidth(100);

		const timeout1 = setTimeout(() => {
			setCurrMode(mode);
		}, 1100);

		const timeout2 = setTimeout(() => {
			setLeft('unset');
			setRight(0);
			setWidth(0);
		}, 1200);

		const timeout3 = setTimeout(() => {
			setRight('unset');
			setLeft(0);
		}, 2500);

		return () => {
			clearTimeout(timeout1);
			clearTimeout(timeout2);
			clearTimeout(timeout3);
		};
	};

	return (
		<div className='grid grid-cols-12 w-full h-[100vh]'>
			<div className='col-span-4 relative p-3'>
				{currMode === SCREEN_MODE.SIGN_IN ? (
					<SignInForm onSwitchMode={onSwitchMode} />
				) : (
					<SignUpForm onSwitchMode={onSwitchMode} />
				)}
				<Box
					className={`absolute top-0 h-full bg-gray-800 transition-all duration-1000 ease-in-out z-10`}
					style={{
						left: left,
						right: right,
						width: width + '%',
					}}
				/>
			</div>
			<div
				className={`col-span-8 relative bg-center bg-cover bg-no-repeat ${
					currMode === SCREEN_MODE.SIGN_IN ? 'bg-signIn' : 'bg-signUp'
				}`}
			>
				<Box
					className={`absolute top-0 h-full bg-white transition-all duration-1000 ease-in-out z-10`}
					style={{
						left: left,
						right: right,
						width: width + '%',
					}}
				/>
			</div>
		</div>
	);
};

export default Login;
