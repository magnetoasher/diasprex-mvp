import {FC} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {InitialDiasp} from '../components/core/_model'
import {SideCard} from './core/sidecard'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'

type Props = {
  img1url: string
  img2url: string
  img3url: string
}

export const Carousel2: FC<Props> = (props: Props, children) => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <SideCard
                title={InitialDiasp.title}
                name={InitialDiasp.name}
                profession={InitialDiasp.profession}
                rcountry={InitialDiasp.rcountry}
                afcountry={InitialDiasp.afcountry}
                afdinsight={InitialDiasp.afdinsight}
                flag={toAbsoluteUrl(InitialDiasp.flag)}
              />
            </div>
            <div className='col-9'>
              <img className='d-block mw-100' src={props.img1url} alt='First slide' />
            </div>
          </div>
        </div>
        {/* <Carousel.Caption>
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <SideCard
                title={InitialDiasp.title}
                name={InitialDiasp.name}
                profession={InitialDiasp.profession}
                rcountry={InitialDiasp.rcountry}
                afcountry={InitialDiasp.afcountry}
                afdinsight={InitialDiasp.afdinsight}
                flag={toAbsoluteUrl(InitialDiasp.flag)}
              />
            </div>
            <div className='col-9'>
              <img className='d-block mw-100' src={props.img2url} alt='Second slide' />
            </div>
          </div>
        </div>
        {/* <Carousel.Caption>
          <h1>Second slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item>
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <SideCard
                title={InitialDiasp.title}
                name={InitialDiasp.name}
                profession={InitialDiasp.profession}
                afcountry={InitialDiasp.afcountry}
                rcountry={InitialDiasp.rcountry}
                afdinsight={InitialDiasp.afdinsight}
                flag={toAbsoluteUrl(InitialDiasp.flag)}
              />
            </div>
            <div className='col-9'>
              <img className='d-block mw-100' src={props.img3url} alt='Third slide' />
            </div>
          </div>
        </div>
        {/* <Carousel.Caption>
          <h1>Third slide label</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  )
}
