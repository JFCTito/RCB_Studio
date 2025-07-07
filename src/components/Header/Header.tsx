import React from 'react'
import HeaderTab from './HeaderTab'

const Header = () => {
const tabList = ["home", "services", "projects", "family", "contact"];
    return (
    <div>
        <img src="" alt="" />
        {tabList.map((tabName, index) => 
            <HeaderTab title={tabName} cuenta={index}/>
        )}

    </div>
  )
}

export default Header