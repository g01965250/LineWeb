import LineLogo from './image/icon-title-pc.png';
import LangIcon from './image/icon-lang-b.png';
import SmLineLogo from './image/icon-line-w.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple ,faGooglePlay} from '@fortawesome/free-brands-svg-icons'
import { faDesktop , faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import service1 from './image/589f44e9813cc8afde9c579e35ecdd15.png'
import service2 from './image/60d56b7ce075c8ec2e60dda4368aeb4e.png'
import service3 from './image/1648c03d05930f6ac2ff5b7112d1b6b0.png'
import service4 from './image/ebf631eac6bdea05e347f1c3ee4fcf40.png'
import service5 from './image/bcb8af39bc8e8bd4ba5c686290741680.png'
import box1 from './image/fbdd3b90609d9e0dfa4624c6e3835cb3.png'
import box2 from './image/430cf150689adf84a25056883eafa478.png'
import box3 from './image/bc243f40962aaf29468d0c9a09f22381.png'
import box4 from './image/f0d37054c0f8489d70c301789bd0cdf9.png'
import box5 from './image/d5794d4710b165c3cc314cae3d1852eb.png'
import content1 from './image/27da407cd76c1fb74defda298a9770ed.png'
import content2 from './image/6ddfd243e2ba708e8e40f54d0d823afd.png'
import content3 from './image/e864d7cafc71dc3cf840395cf51aea92.png'
import content4 from './image/d4a6b69c5e35f373ed00fe8cc861e36b.png'
import content5 from './image/24ccdce211e893e7e9d7b2c6fd5bc6ec.png'
import content6 from './image/86b09587299fad3493664e5182d131f4.png'





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
      <div className='main-title-area'>
        <h2>Life on LINE</h2>
        <p>超越通訊軟體，LINE為用戶建構全新的溝通型態與豐富的數位生活，成為用戶生活中不可或缺的平台。</p>
      </div>
      <div className='service-wrapper'>
        <div className='ServiceBox-wrapper'>
          <div className='ServiceBox-content-wrapper right-border'>
            <div className='point'></div>
            <div className='ServiceBox-content'>
              <img src={service1} alt='損壞'/>
              <h3>LINE TODAY</h3>
              <h4>隨點隨看 生活快充</h4>
              <p>最即時的新聞、影音、運動賽事和娛樂內容直播，讓你話題永不斷線，LINE TODAY陪伴您的每一天！</p>
              <a href='#' ><FontAwesomeIcon icon={faExternalLinkAlt} className='external'/>其他詳細資料</a>
            </div>
          </div>
          <div className='ServiceBox-rightImg'>
            <img src={box1} alt='損壞'/>
          </div>
        </div>
        <div className='ServiceBox-wrapper'>
          <div className='ServiceBox-leftImg'>
            <img src={box2} alt='損壞'/>
          </div>
          <div className='ServiceBox-content-wrapper left-border'>
            <div className='point'></div>
            <div className='ServiceBox-content ServiceBox-content2'>
              <img src={service2} alt='損壞'/>
              <h3>LINE貼文串</h3>
              <h4>探索樂趣，分享生活</h4>
              <p>在貼文串追蹤你的最愛．有感內容不錯過。<br/>
                 打造你的個人閱知頻道，探索生活大小事。<br/>
                 分享所見所聞，串連人際、啟發創意的無限可能！</p>
              <a href='#' ><FontAwesomeIcon icon={faExternalLinkAlt} className='external'/>其他詳細資料</a>
            </div>
          </div>
        </div>
        <div className='ServiceBox-wrapper'>
          <div className='ServiceBox-content-wrapper right-border'>
            <div className='point'></div>
            <div className='ServiceBox-content'>
              <img src={service3} alt='損壞'/>
              <h3>LINE Pay</h3>
              <h4>付款、轉帳、生活繳費，輕鬆簡單又便利！</h4>
              <p>付款簡單又便利，還能輕鬆轉帳給LINE好友，動動手指輕鬆完成日常生活各種帳單繳費， 免出門省時又省力。</p>
              <div className='download-wrapper'>
                <div className='download-icon'><FontAwesomeIcon icon={faApple}/></div>
                <div className='download-icon'><FontAwesomeIcon icon={faGooglePlay}/></div>
                <a href='#' ><FontAwesomeIcon icon={faExternalLinkAlt} className='external'/>其他詳細資料</a>
              </div>
            </div>
          </div>
          <div className='ServiceBox-rightImg'>
            <img src={box3} alt='損壞'/>
          </div>
        </div>
        <div className='ServiceBox-wrapper'>
          <div className='ServiceBox-leftImg'>
            <img src={box4} alt='損壞'/>
          </div>
          <div className='ServiceBox-content-wrapper left-border'>
            <div className='point'></div>
            <div className='ServiceBox-content ServiceBox-content2'>
              <img src={service4} alt='損壞'/>
              <h3>LINE購物</h3>
              <h4>先LINE購物再購物</h4>
              <p>涵蓋各大購物、拍賣、精品、通路、旅遊、及票券商店，輕鬆貨比五百家，一站比價三千萬筆商品，再享LINE POINTS回饋賺不停！</p>
              <div className='download-wrapper'>
                <div className='download-icon'><FontAwesomeIcon icon={faApple}/></div>
                <div className='download-icon'><FontAwesomeIcon icon={faGooglePlay}/></div>
                <a href='#' ><FontAwesomeIcon icon={faExternalLinkAlt} className='external'/>其他詳細資料</a>
              </div>
            </div>
          </div>
        </div>
        <div className='ServiceBox-wrapper'>
          <div className='ServiceBox-content-wrapper right-border'>
            <div className='point'></div>
            <div className='big-point-wrapper'>
              <div className='big-point'></div>
            </div>
            <div className='ServiceBox-content'>
              <img src={service5} alt='損壞'/>
              <h3>LINE TV</h3>
              <h4>共享追劇生活</h4>
              <p>和朋友一起追劇，不錯過最新、最熱門、最潮的話題大劇，即時分享娛樂影音，展開精彩生活故事，LINE TV是您的追劇第一選擇！</p>
              <div className='download-wrapper'>
                <div className='download-icon'><FontAwesomeIcon icon={faApple}/></div>
                <div className='download-icon'><FontAwesomeIcon icon={faGooglePlay}/></div>
                <a href='#' ><FontAwesomeIcon icon={faExternalLinkAlt} className='external'/>其他詳細資料</a>
              </div>
            </div>
          </div>
          <div className='ServiceBox-rightImg'>
            <img src={box5} alt='損壞'/>
          </div>
        </div>

      </div>
      <div className='communication-wrapper'>
        <div className='communication-title-wrapper'>
          <h1>通訊軟體</h1>
          <p>一款全新型態的通訊軟體，讓您隨時隨地享受免費傳訊、免費通話等溝通樂趣。</p>
        </div>
        <div className='communication-content-wrapper'>
          <div className='communication-content'>
            <img src={content1} alt='損壞'/>
            <h2>聊天、語音通話&視訊通話</h2>
            <p>能夠和好友一對一或多人群組訊息聊天，或是進行語音、視訊通話。</p>
          </div>
          <div className='communication-content'>
            <img src={content2} alt='損壞'/>
            <h2>貼圖＆表情貼＆主題</h2>
            <p>使用有趣的貼圖或表情貼豐富聊天，也能更換超讚的主題來表達自己。</p>
          </div>
          <div className='communication-content'>
            <img src={content3} alt='損壞'/>
            <h2>主頁</h2>
            <p>可以快速連結 LINE 的各種服務，包含貼圖等多樣的內容資訊。</p>
          </div>
          <div className='communication-content down'>
            <img src={content4} alt='損壞'/>
            <h2>社群</h2>
            <p>輕鬆分享共同興趣、開心聊出好麻吉。</p>
          </div>
          <div className='communication-content down'>
            <img src={content5} alt='損壞'/>
            <h2>貼文串</h2>
            <p>供你分享你的近況，或是瞭解好友的最新消息。透過「探索」功能，能找到更多你喜愛的內容。</p>
          </div>
          <div className='communication-content down'>
            <img src={content6} alt='損壞'/>
            <h2>錢包</h2>
            <p>使用「 LINE Pay 」可以進行安全方便的行動付款或轉帳，也能使用其他金融相關服務。</p>
          </div>
        </div>
      </div>
      <a className='corporate-banner'href='#'>
        <div className='corporate-wrapper'>
          <h1>企業服務</h1>
        </div>
      </a>
    </main>
    </>
  )




}

export default Line;