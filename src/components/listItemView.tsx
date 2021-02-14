import * as React from 'react'
import { ListItem } from './litsItem'

interface ListItemView {
    listItems: any
}

export const ListItemView = () => {
    return <div>
        <ListItem item={{} as any} />
    </div>
}