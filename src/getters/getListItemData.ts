import { ListItemPRops } from "../hooks/useGetData"

export const getListItemData = (data: ListItemPRops) => {
    if (data) {
        const { metadata } = data
        const abstracts = metadata.abstracts.map(oneAbstract => oneAbstract.value).join(';')
        const title = metadata.titles[0].title
        return { abstracts, title }
    }
    return {}
}