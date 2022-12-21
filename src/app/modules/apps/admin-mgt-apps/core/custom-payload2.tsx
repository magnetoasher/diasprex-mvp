import {FC, useState, createContext, useContext, useEffect} from 'react'
import {PaginationState} from '../../../../../_metronic/helpers'

const initialPayload: PaginationState = {
  page: 1,

  links: [
    {
      url: null,
      label: '&laquo; Previous',
      active: false,
      page: null,
    },
    {
      url: '/?page=1',
      label: '1',
      active: true,
      page: 1,
    },
    {
      url: '/?page=2',
      label: '2',
      active: false,
      page: 2,
    },
    {
      url: '/?page=3',
      label: '3',
      active: false,
      page: 3,
    },
    {
      url: '/?page=2',
      label: 'Next &raquo;',
      active: false,
      page: 2,
    },
  ],

  items_per_page: 10,
}

export const PayloadProvider = (page: number, items_per_page: any, response: any) => {
  const [Payload, setPayload] = useState<PaginationState>(initialPayload)
  const [activePage, setActivePage] = useState(Array(3).fill(false))

  page > 0 && (activePage[page - 1] = true)

  const PrevUrl = page > 1 ? `/?page=${page - 1}` : null
  const PrevPage = page > 1 ? page - 1 : null

  const lastPage = Math.ceil(response / items_per_page)

  const NextUrl = page < lastPage ? `/?page=${page + 1}` : null
  const NextPage = page < lastPage ? page + 1 : null

  const pageLinks = activePage.map((val, index) => ({
    url: `/?page=${index + 1}`,
    label: `${index + 1}`,
    active: val,
    page: index + 1,
  }))

  const updatedPayload = {
    page: page,
    links: [
      {
        url: PrevUrl,
        label: '&laquo; Previous',
        active: false,
        page: PrevPage,
      },
      ...pageLinks,
      {
        url: NextUrl,
        label: 'Next &raquo;',
        active: false,
        page: NextPage,
      },
    ],

    items_per_page: items_per_page,
  }
  useEffect(() => {
    setPayload(updatedPayload)
  }, [page, items_per_page])

  return Payload
}
