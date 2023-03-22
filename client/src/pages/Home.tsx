import {
	SiToyota,
	SiFord,
	SiVolkswagen,
	SiMercedes,
	SiMitsubishi,
	SiGeneralelectric,
	SiNissan,
} from 'react-icons/si';

const Home = () => {
	return (
		<>
			<section className='flex justify-between items-center h-auto'>
				<div className='flex justify-center items-center h-full w-full'>
					<p>Explore & Find the right car of your dreams.</p>
				</div>
				<div className='h-[500px] w-full rounded-lg overflow-clip'>
					<img
						alt='hero-1'
						src='src/assets/Hero_images/hero_1.jpg'
						className='h-full w-full object-cover'
					/>
				</div>
			</section>

			<section className='bg-slate-100 flex flex-wrap mt-28 justify-between items-center h-auto'>
				<SiToyota className='h-14 w-14 text-gray-400' />
				<SiFord className='h-14 w-14 text-gray-400 ' />
				<SiVolkswagen className='h-14 w-14 text-gray-400' />
				<SiMercedes className='h-14 w-14 text-gray-400' />
				<SiMitsubishi className='h-14 w-14 text-gray-400' />
				<SiGeneralelectric className='h-14 w-14 text-gray-400' />
				<SiNissan className='h-14 w-14 text-gray-400' />
			</section>
		</>
	);
};

export default Home;
