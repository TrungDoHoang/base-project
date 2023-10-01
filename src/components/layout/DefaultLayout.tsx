import { Footer, Header } from '@/components';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<main className='flex-1'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default DefaultLayout;
