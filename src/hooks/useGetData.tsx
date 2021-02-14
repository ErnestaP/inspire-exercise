import axios, {
} from 'axios';

import { useEffect, useState } from 'react';

export interface ListDataProps {
  hits: {
    hits: [{
      metadata: {
        abstracts: [{ value: string }];
        titles: [{ title: string }];
        control_number: number;
      }
    }]
  }
}

export interface ListItemPRops {
  metadata: {
    abstracts: [{ value: string }];
    titles: [{ title: string }]
  }
}

export const useGetData = (url: string) => {
  const [data, setData] = useState<ListDataProps | any>()
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    if (url) {
      getDataFromRequest()
    }
  }, [url])

  const getDataFromRequest = () => {
    axios.get(url)
      .then((response) => {
        setLoader(false)
        const item: ListDataProps = response.data
        setData(item)
      })
      .catch(error => {
        setLoader(false)
        console.error(`Error ${error}`)
      })
  }
  return { data, loader }
}