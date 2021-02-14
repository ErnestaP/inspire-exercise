import * as React from 'react'
import { getListItemsFromData } from '../getters/getListItemsFromData'

import { useGetData } from '../hooks/useGetData'
import { ListItem } from './litsItem'

interface ListItemView {
    listItems: any
}

export const ListItemView = () => {
    const { data } = useGetData('https://inspirehep.net/api/literature')
    const list = getListItemsFromData(data)

    return <div>
        {list.map(item => (
            <ListItem item={item} />
        ))}
    </div>
}