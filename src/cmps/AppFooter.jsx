export function AppFooter() {
	return (
		<footer className='app-footer flex'>
			<div className='left flex column'>
				<h1 className='flex'>myteam</h1>
				<div className='flex space-between'>
					<span>home</span>
					<span>about</span>
				</div>
			</div>
			<div className='details flex column greyed-text'>
				<p>987 Hillcrest Lane Irvine, CA California 92714 Call Us : 949-833-7432</p>
			</div>
			<div className='right'>
				<div className='media'>
					<img src='' alt='' />
					<img src='' alt='' />
					<img src='' alt='' />
				</div>
				<span className='copyrights greyed-text'>Copyright 2020. All Rights Reserved</span>
			</div>
		</footer>
	);
}
