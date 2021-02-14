import * as React from 'react'
import { List, Avatar, Button, Skeleton } from 'antd';

import { getListItemsFromData } from '../getters/getListItemsFromData'
import { useGetData } from '../hooks/useGetData'

interface ListItemView {
  listItems: any
}

export const ListItemView = () => {
  const { data } = useGetData('https://inspirehep.net/api/literature')
  const list = getListItemsFromData(data)

  return <List
    itemLayout="horizontal"
    dataSource={list}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          title={item.title}
          description={item.abstracts}
        />
      </List.Item>
    )}
  />
}