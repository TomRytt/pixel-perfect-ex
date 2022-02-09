import blueLine from '../assets/imgs/small-blue-line.png';
import tealStripes from '../assets/imgs/teal-stripes.png';
import redOval from '../assets/imgs/red-oval.png';
import blueOval from '../assets/imgs/blue-oval.png';
import blueSquare from '../assets/imgs/blue-square.png';

export function Hero() {
	return (
		<section className='hero'>
			<main className='flex main-layout'>
				<div className='main-hero flex'>
					<div className='hero-title-container'>
						<h1 className='hero-title'>
							<span>Find the best</span> <span className='red-span'>talent</span>
						</h1>
					</div>
					<div className='hero-text-container flex column'>
						<img src={blueLine} className='line' alt='' />
						<p className='hero-text'>
							Finding the right people and building high performing teams can be hard. Most companies aren’t tapping
							into the abundance of global talent. We’re about to change that.
						</p>
					</div>
				</div>
			</main>
			<div className='imgs-container'>
				<img src={tealStripes} className='teal-lines' alt='' />
				<img src={blueOval} className='blue-oval' alt='' />
				<img src={redOval} className='red-oval' alt='' />
				<img src={blueSquare} className='blue-square' alt='' />
			</div>
		</section>
	);
}
