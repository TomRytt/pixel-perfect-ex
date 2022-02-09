import kady from '../assets/imgs/Kady.png';
import aiysha from '../assets/imgs/Aiysha.png';
import arthur from '../assets/imgs/Arthur.png';

export function TestimoniesList() {
	return (
		<ul className='testimonies-list'>
			<li className='testimony kady'>
				<div className='testimony-text'>
					<p className='testimony-descreption'>
						“The team perfectly fit the specialized skill set required. They focused on the most essential features
						helping us launch the platform eight months faster than planned.”
					</p>
					<span className='name blue-span'>Kady Baker</span>
					<span className='job'>Product Manager at BookMark</span>
				</div>
				<div className='imgs-div'>
					<img src={kady} alt='' />
				</div>
			</li>
			<li className='testimony aiysha'>
				<div className='testimony-text'>
					<p className='testimony-descreption'>
						“We needed to automate our entire onboarding process. The team came in and built out the whole journey.
						Since going live, user retention has gone through the roof!”
					</p>
					<span className='name blue-span'>Aiysha Reese</span>
					<span className='job'>Founder of Manage</span>
				</div>
				<div className='imgs-div'>
					<img src={aiysha} alt='' />
				</div>
			</li>
			<li className='testimony arthur'>
				<div className='testimony-text'>
					<p className='testimony-descreption'>
						“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch
						was an instant success with 100k downloads in the first month.”
					</p>
					<span className='name blue-span'>Arthur Clarke</span>
					<span className='job'>Co-founder of MyPhysio</span>
				</div>
				<div className='imgs-div'>
					<img src={arthur} alt='' />
				</div>
			</li>
		</ul>
	);
}
