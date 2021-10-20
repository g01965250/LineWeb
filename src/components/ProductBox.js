import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple ,faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import {faEllipsisH } from '@fortawesome/free-solid-svg-icons'


function ProductBox (props) {

  const {img , title , content} = props

  return(
    <div className='product-box'>
    <img src={img} alt='損壞'/>
    <h3>{title}</h3>
    <p>{content}</p>
    <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
    <div className='product-box-hover'>
      <a href='#'><div><FontAwesomeIcon className='product-box-icon-apple' icon={faApple}/>App Store</div></a>
      <a href='#'><div><FontAwesomeIcon className='product-box-icon-google' icon={faGooglePlay}/>Google Play</div></a>
    </div>
  </div>
  )
}

export default ProductBox