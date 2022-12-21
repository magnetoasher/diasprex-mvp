import {FC, useState, createContext, useContext, useEffect} from 'react'

type PayloadProps = {
  pagination: {
    page: number
    first_page_url?: string
    from?: number
    last_page?: number
    links?: Array<{label: string; active: boolean; url: string | null; page: number | null}>
    next_page_url?: string | null
    items_per_page: 10 | 30 | 50 | 100
    prev_page_url?: string | null
    to?: number
    total?: number
  }
}
const initialPayload: PayloadProps = {
  pagination: {
    page: 1,
    first_page_url: '/?page=1',
    from: 1,
    last_page: 3,
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
    next_page_url: '/?page=2',
    items_per_page: 10,
    prev_page_url: null,
    to: 10,
    total: 21,
  },
}

export const PayloadProvider = (page: number, items_per_page: any, response: any) => {
  const [Payload, setPayload] = useState<PayloadProps>(initialPayload)
  const [activePage, setActivePage] = useState(Array(3).fill(false))

  page > 0 && (activePage[page - 1] = true)

  const PrevUrl = page > 1 ? `/?page=${page - 1}` : null
  const PrevPage = page > 1 ? page - 1 : null

  const lastPage = Math.ceil(response / items_per_page)
  const fromValue = page > 1 ? page * items_per_page - items_per_page + 1 : 1
  const NextUrl = page < lastPage ? `/?page=${page + 1}` : null
  const NextPage = page < lastPage ? page + 1 : null

  const pageLinks = activePage.map((val, index) => ({
    url: `/?page=${index + 1}`,
    label: `${index + 1}`,
    active: val,
    page: index + 1,
  }))

  const updatedPayload = {
    pagination: {
      page: page,
      first_page_url: '/?page=1',
      from: fromValue,
      last_page: lastPage,
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
      next_page_url: `/?page=${page + 1}`,
      items_per_page: items_per_page,
      prev_page_url: PrevUrl,
      to: items_per_page * page,
      total: response,
    },
  }

  useEffect(() => {
    setPayload(updatedPayload)
  }, [page])

  return Payload
}
