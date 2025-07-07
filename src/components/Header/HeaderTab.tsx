import React from 'react'
import type { HeaderTabProps } from '../../ts/interfaces/headerTabProps'


const HeaderTab = (headerTabProps: HeaderTabProps) => {
  return (
    <div>{headerTabProps.title + headerTabProps.cuenta}</div>
  )
}

export default HeaderTab