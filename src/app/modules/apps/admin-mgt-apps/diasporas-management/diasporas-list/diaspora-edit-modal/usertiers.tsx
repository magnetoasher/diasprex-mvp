import {FC} from 'react'


export const EnablerTiers:FC = () => {
  return (
      <div className = 'd-flex fv-row'>
    <div className="form-check mx-6">
        <input className="form-check-input-width"
          type="radio"
          name="enablertier"
          id="basic"
          value="be"
          checked />
  <label className="form-check-label" htmlFor="basic">
    Basic Enabler
  </label>
</div>
<div className="form-check mx-6">
  <input className="form-check-input-width" type="radio" name="enablertier" id="super" value="se"/>
  <label className="form-check-label" htmlFor="super">
    Super Enabler
  </label>
</div>
<div className="form-check mx-6">
  <input className="form-check-input-width" type="radio" name="enablertier" id="enterprise" value="ee"/>
  <label className="form-check-label" htmlFor="enterprise">
    Enterprise
  </label>
</div>
    </div>
  )
}

export const SponsorTiers:FC = () => {
  return (
<div className = 'd-flex fv-row'>
    <div className="form-check mx-6">
  <input className="form-check-input-width" type="radio" name="sponsortier" id="basic" value="bs" checked/>
  <label className="form-check-label" htmlFor="basic">
    Basic Sponsor
  </label>
</div>
<div className="form-check mx-6">
  <input className="form-check-input-width" type="radio" name="sponsortier" id="silver" value="ss"/>
  <label className="form-check-label" htmlFor="silver">
    Silver Sponsor
  </label>
</div>
<div className="form-check mx-6">
  <input className="form-check-input-width" type="radio" name="sponsortier" id="gold" value="gs"/>
  <label className="form-check-label" htmlFor="gold">
    Gold Sponsor
              </label>
              </div>
<div className="form-check mx-6">
  <input className="form-check-input-width" type="radio" name="sponsortier" id="diamond" value="ds"/>
  <label className="form-check-label" htmlFor="diamond">
    Gold Sponsor
  </label>
          </div>
          
          </div>
  )
}
