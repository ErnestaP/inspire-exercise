import * as React from 'react'

interface ItemProps {
    title: string;
    abstracts: string;
}

interface ItemViewProps {
    item: ItemProps
}

export const ListItem = ({ item }: ItemViewProps) => {
    return <div> the first item </div>

}