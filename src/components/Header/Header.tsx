import { useState, useEffect, useRef } from 'react';
import HeaderTab from './HeaderTab';
import logo from '../../assets/logo_RCB.png';
import { tabListMisc } from '../../const/misc';

const Header = () => {
  const [activeTab, setActiveTab] = useState<string | null>('Home');
  const tabList = tabListMisc();

  const isClickScrolling = useRef(false);

  const getCurrentSection = () => {
    const sections = tabList.map((tab) => document.getElementById(tab.id));
    const headerHeight = 80;
    const threshold = 150;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerHeight + threshold && rect.bottom >= headerHeight + threshold) {
          return tabList[i].id;
        }
      }
    }
    return 'Home';
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isClickScrolling.current) return;

      if (!ticking) {
        requestAnimationFrame(() => {
          const currentSection = getCurrentSection();
          setActiveTab(currentSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const titleView = document.getElementById(id);
    if (titleView) {
      isClickScrolling.current = true;

      const yOffset = -80;
      const y = titleView.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });

      setTimeout(() => {
        isClickScrolling.current = false;
      }, 1000);
    }
  };

  return (
    <header className='fixed w-full z-50 flex items-center justify-between px-6 h-20 bg-white text-black '>
      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-2'>
          <img src={logo} alt='RCB Studio' className='h-8' />
        </div>
      </div>

      <nav className='flex gap-6'>
        {tabList.map((tab, index) => (
          <HeaderTab
            key={index}
            id={tab.id}
            title={tab.name}
            isActive={tab.id === activeTab}
            onClick={handleTabClick}
          />
        ))}
      </nav>

      <div className='flex items-center gap-3'>
        <button className='w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors'>
          <svg className='w-4 h-4 text-gray-600' fill='currentColor' viewBox='0 0 20 20'>
            <path
              fillRule='evenodd'
              d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <button className='w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors'>
          es
        </button>
      </div>
    </header>
  );
};

export default Header;
