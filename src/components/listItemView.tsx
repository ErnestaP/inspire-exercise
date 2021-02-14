import * as React from 'react'
import { List, Typography } from 'antd';
import {Link} from "react-router-dom";

import { getListItemsFromData } from '../getters/getListItemsFromData'
import { useGetData } from '../hooks/useGetData'

const { Title } = Typography
interface ListItemView {
  listItems: any
}

export const ListItemView = () => {
  const { data } = useGetData('https://inspirehep.net/api/literature')
  const list = getListItemsFromData(data)

  return <div>
    <Title>{`Totlar Results: ${list.length}`}</Title>
    <List
      itemLayout="horizontal"
      dataSource={list}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<Link to="/item">{item.title}</Link>}
            description={item.abstracts}
          />
        </List.Item>
      )}
    />
  </div>
}