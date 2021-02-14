import * as React from 'react'
import { Typography } from 'antd';
import { Spin } from 'antd';

import { getListItemsData } from '../getters/getListItemsData'
import { useGetData } from '../hooks/useGetData'
import {Item} from './item'
import '../App.css'

const { Title } = Typography

export const ListItemView = () => {
  const { data, loader } = useGetData('https://inspirehep.net/api/literature')
  const list = getListItemsData(data)

  return <div className="Wrapper">
    {loader ? <div className='LoaderWrapper'>
      <Spin tip="Loading..." />
    </div> :
      <div className="ListWrapper">
        <Title
          level={4} className="TitleWrapper">{`Total Results: ${list.length}`}</Title>
        {
          list.map(item => (
           <Item item={item}/>
          ))
        }
      </div>}
  </div>
}