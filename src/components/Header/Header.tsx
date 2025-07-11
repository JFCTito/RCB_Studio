import React from 'react'
import HeaderTab from './HeaderTab'

const Header = () => {
const tabList = ['Home', 'Services', 'Projects', 'Family', 'Contact'];
    return (
    <div>
        {tabList.map((tabName, index) => 
            <HeaderTab key={index} title={tabName} cuenta={index}/>
        )}

    </div>
  )
}

export default Header