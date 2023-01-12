/* eslint-disable jsx-a11y/anchor-is-valid */
import {setNestedObjectValues} from 'formik'
import React, {FC, useState} from 'react'
import {useQueryClient, useMutation} from 'react-query'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {changeSelectedProposals} from '../../core/_requests'
import {QUERIES} from '../../../../../../../_metronic/helpers'

import {KTSVG} from '../../../../../../../_metronic/helpers'
type Props = {
  title: string
  options: string[]
  id: string
}
export const ChangeStatus: FC<Props> = ({id, title, options}) => {
  const {selected, clearSelected} = useListView()
  const queryClient = useQueryClient()
  const {query} = useQueryResponse()
  const [status, setStatus] = useState<string>('')

  const changeSelectedItems = useMutation(() => changeSelectedProposals(selected, status), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.PROPS_LIST}-${query}`])
      clearSelected()
    },
  })
  return (
    <div className='modal fade' tabIndex={-1} id={id}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{title}</h5>
            <div
              className='btn btn-icon btn-sm btn-active-light-primary ms-2'
              data-bs-dismiss='modal'
              aria-label='Close'
            >
              <KTSVG
                path='/media/icons/duotune/arrows/arr061.svg'
                className='svg-icon svg-icon-2x'
              />
            </div>
          </div>

          <div className='separator border-gray-200'></div>

          <div className='px-7 py-5'>
            <div className='mb-10'>
              <h5 className='text-muted fs-6'>
                This will change the selected items. Are you sure you want to proceed?
              </h5>
              <label className='form-label fw-bold'>Status:</label>

              <div>
                <select
                  className='form-select form-select-solid'
                  data-kt-select2='true'
                  data-placeholder='Select option'
                  data-allow-clear='true'
                  defaultValue={'1'}
                  onChange={(e) => {
                    setStatus(e.target.value)
                  }}
                >
                  <option></option>
                  {options.length > 0 &&
                    options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            {/* <div className='mb-10'>
              <label className='form-label fw-bold'>Member Type:</label>

              <div className='d-flex'>
                <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                  <input className='form-check-input' type='checkbox' value='1' />
                  <span className='form-check-label'>Author</span>
                </label>

                <label className='form-check form-check-sm form-check-custom form-check-solid'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='2'
                    defaultChecked={true}
                  />
                  <span className='form-check-label'>Customer</span>
                </label>
              </div>
            </div> */}

            {/* <div className='mb-10'>
              <label className='form-label fw-bold'>Notifications:</label>

              <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  name='notifications'
                  defaultChecked={true}
                />
                <label className='form-check-label'>Request Admin Review</label>
              </div>
            </div> */}

            <div className='d-flex justify-content-end'>
              <button
                type='reset'
                className='btn btn-sm btn-white btn-active-light-primary me-2'
                data-bs-dismiss='modal'
              >
                Reset
              </button>

              <button
                type='submit'
                className='btn btn-sm btn-primary'
                data-bs-dismiss='modal'
                onClick={async () => await changeSelectedItems.mutateAsync()}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
