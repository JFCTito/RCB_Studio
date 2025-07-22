import { useState } from 'react';
import HeaderTab from './HeaderTab';

const Header = () => {
  const tabList = ['Home', 'Services', 'Projects', 'Family', 'Contact'];
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleTabClick = (title: string) => {
    console.log(`Clicked on ${title}`);
    setActiveTab(title);
    const titleView = document.getElementById(title);
    if (titleView) {
      titleView.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 h-20 bg-white shadow text-black">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="RCB Studio" className="h-10" />
      </div>

      <nav className="flex gap-6">
        {tabList.map((tabName, index) => (
          <HeaderTab
            key={index}
            title={tabName}
            isActive={tabName === activeTab}
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
