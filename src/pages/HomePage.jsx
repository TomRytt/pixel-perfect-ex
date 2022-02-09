import React from 'react';

// import {itemList} from '../cmps/ItemList.jsx';
// import {itemPreview} from '../cmps/ItemPreview.jsx';.
import {Hero} from '../cmps/Hero.jsx';
import {Features} from '../cmps/Features.jsx';
import {Testimonies} from '../cmps/Testimonies.jsx';
import {CTA} from '../cmps/CTA.jsx';

export function HomePage() {
	return (
		<section className='homepage flex column h100'>
			<header className='homepage-header'>
				<Hero />
			</header>
			<main className='homepage-main'>
				<Features />
				<Testimonies />
				<CTA />
			</main>
		</section>
	);
}
