import { PATH } from '@/constants';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	const navItem = [
		{
			path: PATH.ROOT,
			name: 'Home',
		},
		{
			path: PATH.CONTACT,
			name: 'Contact',
		},
	];

	return (
		<header>
			{/* Navigation bar */}
			<nav className='relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start'>
				<div className='flex w-full flex-wrap items-center justify-between px-3'>
					<h1 className='font-mono text-4xl text-purple-700/80 font-bold'>
						<Link to={PATH.ROOT}>Logo</Link>
					</h1>

					<div className='flex items-center'>
						{/* Hamburger menu button */}
						<button className='border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden'>
							{/* Hamburger menu icon */}
							<span className='[&>svg]:w-5'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='h-7 w-7'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
									/>
								</svg>
							</span>
						</button>
					</div>
					{/* Navigation links */}
					<div className='!visible hidden items-center lg:!flex lg:basis-auto'>
						<ul className='mr-auto flex flex-col lg:flex-row'>
							{navItem.map((item, idx) => (
								<li key={idx} className='mb-4 lg:mb-0 lg:pr-2'>
									<NavLink
										className='block uppercase transition duration-150 ease-in-out hover:text-primaryHover focus:text-primaryHover disabled:text-secondary dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-primaryHover [&.active]:font-semibold'
										to={item.path}
									>
										{item.name}
									</NavLink>
								</li>
							))}
							<li className='mb-4 lg:mb-0 lg:pr-2'>
								<NavLink
									className='block uppercase transition duration-150 ease-in-out hover:text-primaryHover focus:text-primaryHover disabled:text-secondary dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-primaryHover [&.active]:font-semibold'
									to={PATH.LOGIN}
								>
									Login
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
