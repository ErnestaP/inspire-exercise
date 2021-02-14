import * as React from 'react'

interface ItemProps {
    title: string;
    abstracts: string;
}

interface ItemViewProps {
    item: ItemProps
}

export const ListItem = ({ item }: ItemViewProps) => {
    return <div>
        <div>{item.title}</div>
        <div>{item.abstracts}</div>
    </div>

}