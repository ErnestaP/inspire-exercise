import { ListDataProps } from "../hooks/useGetData"

export const getListItemsData = (data: ListDataProps) => {
    if (data) {
        const { hits } = data
        const list = hits.hits
        const formatedArray = list.map(listItem => {
            const abstracts = listItem.metadata.abstracts.map(oneAbstract => oneAbstract.value).join(';')
            const title = listItem.metadata.titles[0].title
            const controlNumber = listItem.metadata.control_number
            return { abstracts, title, controlNumber }
        })
        return formatedArray
    }
    return []
}