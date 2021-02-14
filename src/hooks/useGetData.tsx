import axios, {
} from 'axios';

import { useEffect, useState } from 'react';

export interface ListDataProps {
    hits: {
        hits: [{
            metadata: {
                abstracts: [{ value: string }];
                titles: [{ title: string }]
            }
        }]
    }
}


export const useGetData = (url: string) => {
    const [data, setData] = useState<ListDataProps | any>()

    useEffect(() => {
        if (url) {
            getDataFromRequest()
        }
    }, [url])

    const getDataFromRequest = () => {
        axios.get(url)
            .then((response) => {
                const item: ListDataProps = response.data
                setData(item)
            })
            .catch(error => console.error(`Error ${error}`))
    }
    return { data }
}