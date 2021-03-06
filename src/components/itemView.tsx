import * as React from 'react'
import { Spin, Typography, Row, Button, Col } from 'antd';
import { LeftOutlined } from '@ant-design/icons'

import { getListItemData } from '../getters/getListItemData'
import { useGetData } from '../hooks/useGetData'
import { useHistory, useParams } from "react-router-dom";
import { Item, OneItemProps } from './item';

export const ItemView = () => {
  let params = useParams();
  const controlNumber = (params as any).controlNumber
  const { data, loader } = useGetData(`https://inspirehep.net/api/literature/${controlNumber}`)
  const item = getListItemData(data)
  let history = useHistory();

  return <div className="Wrapper">{loader ?
    <div className='LoaderWrapper'>
      <Spin tip="Loading..." />
    </div>
    : <div className="ListWrapper">
      <div className="ButtonWrapper">
        <Button
          type="link"
          icon={<LeftOutlined />}
          onClick={() => history.goBack()}>
          Back to Search Results
          </Button>
      </div>
      <Item item={item as OneItemProps} />
    </div>}</div>
}