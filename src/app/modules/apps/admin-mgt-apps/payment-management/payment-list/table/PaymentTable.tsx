import {useMemo} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from './columns/CustomHeaderColumn'
import {CustomRow} from './columns/CustomRow'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {PayMethodColumns} from './columns/_columns'
import {PayMethod} from '../core/_models'

import {ListLoading} from '../../../core/loading/ListLoading'
import {PayMethodListPagination} from '../components/pagination/paymentListPagination'
import {KTCardBody} from '../../../../../../../_metronic/helpers'

const PayMethodTable = () => {
  const paymethods = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => paymethods, [paymethods])
  const columns = useMemo(() => PayMethodColumns, [])
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })

  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='kt_table_paymethod'
          className='table table-hover align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<PayMethod>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: Row<PayMethod>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <PayMethodListPagination />
      {isLoading && <ListLoading />}
    </KTCardBody>
  )
}

export {PayMethodTable}
