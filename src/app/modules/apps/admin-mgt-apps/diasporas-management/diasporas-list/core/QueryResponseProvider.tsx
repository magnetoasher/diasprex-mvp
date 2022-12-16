/* eslint-disable react-hooks/exhaustive-deps */
import {FC, useContext, useState, useEffect, useMemo} from 'react'
import {useQuery} from 'react-query'
import {
  createResponseContext,
  initialQueryResponse,
  initialQueryState,
  PaginationState,
  QUERIES,
  stringifyRequestQuery,
  WithChildren,
} from '../../../../../../../_metronic/helpers'
import {getDiasporas} from './_requests'
import {Diaspora} from './_models'
import {useQueryRequest} from '../../../core/QueryRequestProvider'
import {PayloadProvider} from '../../../core/custom-payload2'

const QueryResponseContext = createResponseContext<Diaspora>(initialQueryResponse)
const QueryResponseProvider: FC<WithChildren> = ({children}) => {
  const {state} = useQueryRequest()
  const [query, setQuery] = useState<string>(stringifyRequestQuery(state))
  const updatedQuery = useMemo(() => stringifyRequestQuery(state), [state])

  useEffect(() => {
    if (query !== updatedQuery) {
      setQuery(updatedQuery)
    }
  }, [updatedQuery])

  const {
    isFetching,
    refetch,
    data: response,
  } = useQuery(
    `${QUERIES.DIASPORAS_LIST}-${query}`,
    () => {
      console.log('Query', query)
      return getDiasporas(query)
    },
    {cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false}
  )

  return (
    <QueryResponseContext.Provider value={{isLoading: isFetching, refetch, response, query}}>
      {children}
    </QueryResponseContext.Provider>
  )
}

const useQueryResponse = () => useContext(QueryResponseContext)

const useQueryResponseData = () => {
  const {response} = useQueryResponse()
  if (!response) {
    return []
  }
  console.log('Data', response)

  return response.data || []
}

const useQueryResponsePagination = () => {
  const defaultPaginationState: PaginationState = {
    links: [],
    ...initialQueryState,
  }
  const {state} = useQueryRequest()
  const {response} = useQueryResponse()
  if (!response || !response.payload || !response.payload.pagination) {
    return defaultPaginationState
  }
  // return PayloadProvider(state.page, state.items_per_page, response.data?.length)
  return response.payload.pagination
}

const useQueryResponseLoading = (): boolean => {
  const {isLoading} = useQueryResponse()
  return isLoading
}

export {
  QueryResponseProvider,
  useQueryResponse,
  useQueryResponseData,
  useQueryResponsePagination,
  useQueryResponseLoading,
}
