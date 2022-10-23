import {useMemo} from 'react'
import {useTable, ColumnInstance, Row} from 'react-table'
import {CustomHeaderColumn} from './oppscolumns/CustomHeaderColumn'
import {CustomRow} from './oppscolumns/CustomRow'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {OppsColumns} from './oppscolumns/_columns'
import {Opps} from '../core/_models'
import {OppsListLoading} from '../components/loading/OppsListLoading'
import {OppsListPagination} from '../components/pagination/OppsListPagination'
import {KTCardBody} from '../../../../../../../_metronic/helpers'

const OppsTable = () => {
  const opps = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => opps, [opps])
  //  console.log(data)
  const columns = useMemo(() => OppsColumns, [])
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })

  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='kt_table_users'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<Opps>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: Row<Opps>, i) => {
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
      <OppsListPagination />
      {isLoading && <OppsListLoading />}
    </KTCardBody>
  )
}

export {OppsTable}
