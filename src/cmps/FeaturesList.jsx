import person from '../assets/imgs/person.png';
import easy from '../assets/imgs/easy.png';
import productivity from '../assets/imgs/productivity.png';
import blueCircle from '../assets/imgs/blue-circle.png';

export function FeaturesList() {
	return (
		<ul className='features-list'>
			<li className='feature experienced'>
				<div className='imgs-div'>
					<img src={blueCircle} className='li-circle' alt='' />
					<img src={person} className='li-img' alt='' />
				</div>
				<div className='feature-text'>
					<span className='feature-title red-span float-left'>Experienced Individuals</span>
					<p className='feature-descreption float-left'>
						Our network is made up of highly experienced professionals who are passionate about what they do.
					</p>
				</div>
			</li>
			<li className='feature implement'>
				<div className='imgs-div'>
					<img src={blueCircle} className='li-circle' alt='' />
					<img src={easy} className='li-img' alt='' />
				</div>
				<div className='feature-text'>
					<span className='feature-title red-span'>Easy to Implement</span>
					<p className='feature-descreption'>
						Our processes have been refined over years of implementation meaning our teams always deliver.
					</p>
				</div>
			</li>
			<li className='feature productivity'>
				<div className='imgs-div'>
					<img src={blueCircle} className='li-circle' alt='' />
					<img src={productivity} className='li-img' alt='' />
				</div>
				<div className='feature-text'>
					<span className='feature-title red-span'>Enhanced Productivity</span>
					<p className='feature-descreption'>
						Our customized platform with in-built analytics helps you manage your distributed teams.
					</p>
				</div>
			</li>
		</ul>
	);
}
