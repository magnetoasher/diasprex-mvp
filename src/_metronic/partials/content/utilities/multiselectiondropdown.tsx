import {FC} from 'react'
import Multiselect from 'multiselect-react-dropdown'

type Options = {
  label: string
  value: number
}

const MultiSelectDropdown: FC<Options[]> = (dropdownOptions: Options[]) => {
  return (
    <Multiselect
      displayValue='label'
      onKeyPressFn={(event) => {
        console.log(event)
      }}
      onRemove={(event) => {
        console.log(event)
      }}
      onSearch={(event) => {
        console.log(event)
      }}
      onSelect={(event) => {
        console.log(event)
      }}
      options={dropdownOptions}
      showCheckbox
    />
  )
}
export default MultiSelectDropdown
