import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { navLinks } from '../../constants/index.js'

const Navbar = () => {
 useGSAP(() => {
	const navTween = gsap.timeline({
	 scrollTrigger: {
		trigger: 'nav',
		start: 'bottom top'
	 }
	});
	
	navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
	 backgroundColor: '#00000050',
	 backgroundFilter: 'blur(10px)',
	 duration: 1,
	 ease: 'power1.inOut'
	});
 })
 
 return (
	<nav className='fixed z-50 w-full'>
	 <div className='flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5 container mx-auto'>
		<a href="#home" className="flex items-center gap-2">
		 <img className='h-20 w-20 rounded-full' src="/img/logo.jpeg" alt="logo" />
		 <p className='font-modern-negra text-3xl -mb-2'>Liberal Democratic Party</p>
		</a>
		
		<ul className='flex-center lg:gap-12 gap-7'>
		 {navLinks.map((link) => (
			<li key={link.id}>
			 <a href={`#${link.id}`}
       className='cursor-pointer text-nowrap md:text-base text-sm'
       >{link.title}</a>
			</li>
		 ))}
		</ul>
	 </div>
	</nav>
 )
}
export default Navbar