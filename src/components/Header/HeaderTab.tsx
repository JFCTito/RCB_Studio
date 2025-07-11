import React from 'react'
import type { HeaderTabProps } from '../../ts/interfaces/headerTabProps'


const HeaderTab = (headerTabProps: HeaderTabProps) => {

  const handleClick = () => {
    const titleView = document.getElementById(headerTabProps.title);
    if (titleView) {
      titleView.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}>
        {headerTabProps.title}

      </button>
    </div>
  )
}

export default HeaderTab