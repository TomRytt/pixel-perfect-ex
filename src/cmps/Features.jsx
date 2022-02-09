import {FeaturesList} from './FeaturesList.jsx';
import redLine from '../assets/imgs/red-line.png';

export function Features() {
	return (
		<section className='features main-layout'>
			<main className='main flex row'>
				<div className='left flex column'>
					<img src={redLine} className='line red-line' alt='' />
					<h1 className='title'>Build & manage distributed team like no one else.</h1>
				</div>
				<div className='right flex column'>
					<FeaturesList />
				</div>
			</main>
		</section>
	);
}
