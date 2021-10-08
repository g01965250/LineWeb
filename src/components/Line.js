import LineLogo from './image/icon-title-pc.png';
import LangIcon from './image/icon-lang-b.png';



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
        <div className='title'>
          <a href='#'>Life on LINE</a>
          <a href='#'>通訊軟體</a>
          <a href='#'>服務總覽</a>
        </div>
        <div>
          <div className='ball'>
            <a href='#'>
                <img  src={LangIcon} alt="損壞"/>
              <div className='language'>TW-</div>
            </a>
          </div>
        </div>
      </div>
    </header>
    </>
  )




}

export default Line;