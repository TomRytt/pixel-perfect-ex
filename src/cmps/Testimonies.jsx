import {TestimoniesList} from './TestimoniesList.jsx';

export function Testimonies() {
	return (
		<section className='testimonies main-layout'>
			<header className='testimonies-header'>
				<h1 className='top-h1'>Delivering real results for top</h1>
				<h1 className='bottom-h1'>
					companies. Some of our <span className='blue-span'>success stories.</span>
				</h1>
			</header>
			<main>
				<TestimoniesList />
			</main>
		</section>
	);
}
