import { useState } from 'react';
import HeaderTab from './HeaderTab';
import logo from '../../assets/logo_RCB.png';
import { tabListMisc } from '../../const/misc';

const Header = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const tabList = tabListMisc();
  const handleTabClick = (id: string) => {
    console.log(`Clicked on ${id}`);
    setActiveTab(id);
    const titleView = document.getElementById(id);
    if (titleView) {
      const yOffset = -80;
      const y =
        titleView.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full z-50 flex items-center justify-between px-6 h-20 bg-white shadow text-black">
      <div className="flex items-center gap-2">
        <img src={logo} alt="RCB Studio" className="h-10" />
      </div>

      <nav className="flex gap-6">
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

      <div className="flex items-center gap-3">
        <button className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-200 transition">
          en
        </button>
        <button className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-200 transition">
          es
        </button>
      </div>
    </header>
  );
};

export default Header;
