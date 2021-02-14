import { ListDataProps } from "../hooks/useGetData"

export const getListItemsFromData = (data: ListDataProps) => {
    if (data) {
        const { hits } = data
        const list = hits.hits
        const formatedArray = list.map(listItem => {
            const abstracts = listItem.metadata.abstracts.map(oneAbstract => oneAbstract.value).join(';')
            const title = listItem.metadata.titles[0].title
            return { abstracts, title }
        })
        return formatedArray
    }
    return []
}