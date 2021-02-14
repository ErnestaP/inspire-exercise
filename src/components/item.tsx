import * as React from 'react'
import { Link } from 'react-router-dom'

export interface OneItemProps {
  controlNumber?: number;
  title: string;
  abstracts: string
}

interface ItemProps {
  item: OneItemProps
}

export const Item = ({ item }: ItemProps) => {
  return (
    <div className="ListItemWrapper">
      <div className="ListItemTitleWrapper"><Link
        className="Link"
        to={ item.controlNumber ? `/item/${item.controlNumber}` : '#'}>{item.title}</Link></div>
      <div>{item.abstracts}</div>
    </div>
  )
}