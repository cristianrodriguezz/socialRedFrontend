import Home from '../icons/Home'
import Further from '../icons/Further'
import Profile from '../icons/Profile'
import { useEffect, useState } from 'react';


const Footer = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else if (currentScrollTop < lastScrollTop) {
        setScrollDirection('up');
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollTop])

  const scrollClassName = `${scrollDirection === 'down' ? 'footer-scroll-down' : 'footer-scroll-up'}`;



  return (
    <footer className={`fixed bottom-1 h-10 p-2 w-1/2 left-[50vw] xl:hidden  -translate-x-1/2  rounded-3xl text-bunker-white  ${scrollClassName}`}>
      <nav>
        <ul className='flex justify-around items-center'>
          <li><Home/></li>
          <li><Further className={`absolute -top-2 h-11 left-1/2 -translate-x-1/2`}/></li>
          <li><Profile/></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer