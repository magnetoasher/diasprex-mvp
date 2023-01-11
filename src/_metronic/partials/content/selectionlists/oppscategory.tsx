export const OppsCategory = () => {
  return (
    <>
      <option value=''>Select Best Match</option>
      <optgroup label='AGRICULTURE'>
        <option value='Agriculture Insurance'>Insurance</option>
        <option value='Agriculture Finance'>Finance</option>
        <option value='Agriculture logistics'>Logistics</option>
        <option value='Agriculture processing'>Processing</option>
        <option value='Agriculture production'>Production</option>
      </optgroup>
      {/* <option value='Education'>Education</option> */}
      <optgroup label='HEALTHCARE'>
        <option value='Healthcare Bioproduction'>Bioproduction</option>
        <option value='Healthcare BioTools'>BioTools</option>
        <option value='Healthcare Clinical'>Clinical</option>
        <option value='Healthcare Insuranc'>Insurance</option>
        <option value='Healthcare Drug Development'>Drug Development</option>
        <option value='Healthcare Infrastructure'>Infrastructure</option>
        <option value='Healthcare Medical Device'>Medical Device</option>
        <option value='Healthcare Pharmacy'>Pharmacy</option>
        <option value='Healthcare Vaccines'>Vaccines</option>
        <option value='Healthcare Diagnostics'>Diagnostics</option>
      </optgroup>
      {/* <option value='Manufacturing'>Manufacturing</option>
      <option value='Tourism'>Tourism</option>
      <option value='Transportation'>Transportation</option>
      <option value='Technology'>Technology</option>
      <option value='Travel'>Travel</option>
      <option value='Hospitality'>Hospitality</option>
      <option value='Banking'>Banking</option>
      <option value='Finance'>Finance</option>
      <option value='Media and Communication'>Media and Communication</option>
      <option value='Entertainment'>Entertainment</option>
      <option value='Real Estate'>Real Estate</option>
      <option value='Logistics'>Logistics</option> */}
    </>
  )
}
