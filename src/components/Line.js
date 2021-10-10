import LineLogo from './image/icon-title-pc.png';
import LangIcon from './image/icon-lang-b.png';
import SmLineLogo from './image/icon-line-w.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple ,faGooglePlay} from '@fortawesome/free-brands-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'




function Line() {

  return(
    <>
    <header>
      <div className='header-wrapper'>
        <div className='logo'>
          <a href='#' >
            <img src={LineLogo} alt="損壞"></img>
          </a>
        </div>
        <div className='nav-title'>
          <a href='#'>Life on LINE</a>
          <a href='#'>通訊軟體</a>
          <a href='#'>服務總覽</a>
        </div>
        <div>
          <div className='ball-wrapper'>
            <div className='ball'>
                <img  src={LangIcon} alt="損壞"/>
              <div className='language'>TW-</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div className='banner-background'>
        <div className='banner-title-wrapper'>
          <h2>Life on LINE</h2>
          <h3>LINE始終陪伴在你身旁。</h3>
        </div>
        <div className='banner-icon-wrapper'>
          <div className='download-icon-title'>
            <img src={SmLineLogo} alt='損壞'/>
            <p>下載</p>
          </div>
          <div className='download-wrapper'>
            <div className='download-icon'><FontAwesomeIcon icon={faApple}/></div>
            <div className='download-icon'><FontAwesomeIcon icon={faGooglePlay}/></div>
            <div className='download-icon'><FontAwesomeIcon icon={faDesktop}/></div>
          </div>
        </div>
      </div>
    </main>
    
    </>
  )




}

export default Line;