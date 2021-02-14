import * as React from 'react'
import { List, Typography } from 'antd';
import { Link } from "react-router-dom";

import { getListItemsData } from '../getters/getListItemsData'
import { useGetData } from '../hooks/useGetData'
import { Spin } from 'antd';
import '../App.css'

const { Title } = Typography

interface ListItemView {
  listItems: any
}


export const ListItemView = () => {
  const { data, loader } = useGetData('https://inspirehep.net/api/literature')
  const list = getListItemsData(data)

  return <div className="Wrapper">
    {loader ? <div className='LoaderWrapper'>
      <Spin tip="Loading..." />
    </div> :
      <div className="ListWrapper">
        <Title className="TitleWrapper">{`Total Results: ${list.length}`}</Title>
        <List
          itemLayout="horizontal"
          dataSource={list}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={<Link 
                  to={`/item/${item.controlNumber}`}>{item.title}</Link>}
                description={item.abstracts}
              />
            </List.Item>
          )}
        />
      </div>}
  </div>
}