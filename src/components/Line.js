import LineLogo from './image/icon-title-pc.png';
import LangIcon from './image/icon-lang-b.png';
import SmLineLogo from './image/icon-line-w.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple ,faGooglePlay} from '@fortawesome/free-brands-svg-icons'
import { faDesktop , faExternalLinkAlt ,faEllipsisH } from '@fortawesome/free-solid-svg-icons'
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
import product1 from './image/product1.png'
import product2 from './image/product2.png'
import product3 from './image/product3.png'
import product4 from './image/product4.png'
import product5 from './image/product5.png'
import product6 from './image/product6.png'
import product7 from './image/product7.png'
import product8 from './image/product8.png'
import product9 from './image/product9.png'
import product10 from './image/product10.png'
import product11 from './image/product11.png'
import product12 from './image/product12.png'
import product13 from './image/product13.png'
import product14 from './image/product14.png'
import product15 from './image/product15.png'
import product16 from './image/product16.png'
import product17 from './image/product17.png'
import product18 from './image/product18.png'
import product19 from './image/product19.png'
import product20 from './image/product20.png'
import product21 from './image/product21.jpg'
import product22 from './image/product22.png'
import product23 from './image/product23.png'
import product24 from './image/product24.png'
import product25 from './image/product25.png'
import product26 from './image/product26.png'
import product27 from './image/product27.png'
import product28 from './image/product28.png'
import product29 from './image/product29.png'
import product30 from './image/product30.png'
import product31 from './image/product31.png'
import product32 from './image/product32.png'
import product33 from './image/product33.png'
import product34 from './image/product34.png'
import product35 from './image/product35.png'
import product36 from './image/product36.png'
import product37 from './image/product37.png'
import product38 from './image/product38.png'
import product39 from './image/product39.png'
import product40 from './image/product40.png'
import product41 from './image/product41.png'
import product42 from './image/product42.png'
import product43 from './image/product43.png'
import product44 from './image/product44.png'
import product45 from './image/product45.png'
import product46 from './image/product46.png'
import product47 from './image/product47.png'
import product48 from './image/product48.png'
import product49 from './image/product49.png'
import product50 from './image/product50.png'





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
      <a className='corporate-banner' href='#'>
        <div className='corporate-wrapper'>
          <h1>企業服務</h1>
        </div>
      </a>
      <div className='all-product-background'>
        <div className='all-product-title'>
          <h1>服務總覽</h1>
        </div>
        <div className='all-product-wrapper'>
          <ul className='all-product-menu'>
            <li><button>All Product</button></li>
            <li><button>通訊</button></li>
            <li><button>娛樂</button></li>
            <li><button>生活</button></li>
            <li><button>購物</button></li>
            <li><button>工具</button></li>
            <li><button>金融</button></li>
            <li><button>企業商務</button></li>
            <li><button>新聞資訊</button></li>
            <li><button>相機</button></li>
            <li><button>Games</button></li>
          </ul>
          <div className='product-box-wrapper'>
            <div className='product-box'>
              <img src={product1} alt='損壞'/>
              <h3>LINE Messenger</h3>
              <p>拉近人與人、人與資訊及應用服務間的距離的通訊軟體</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product2} alt='損壞'/>
              <h3>LINE STORE</h3>
              <p>可購買 LINE 貼圖、主題或遊戲中貨幣的官方線上商店</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product3} alt='損壞'/>
              <h3>LINE貼文串</h3>
              <p>探索樂趣，分享生活</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product4} alt='損壞'/>
              <h3>LINE Antivirus</h3>
              <p>在「LINE Antivirus」執行幾個簡單的步驟， 就能保護智慧手機上個人資訊的安全， 並可免於病毒或惡意程式的侵害。(限Android版本)</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product5} alt='損壞'/>
              <h3>LINE社群</h3>
              <p>輕鬆分享共同興趣、開心聊出好麻吉。</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product6} alt='損壞'/>
              <h3>LINE TV</h3>
              <p>共享追劇生活</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product7} alt='損壞'/>
              <h3>LINE GAME</h3>
              <p>PLAYTIME ANYTIME！ 隨時隨地和朋友一起玩！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product8} alt='損壞'/>
              <h3>LINE POD	</h3>
              <p>全新 PC 遊戲平台，用 LINE 帳號暢玩各種線上遊戲！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product9} alt='損壞'/>
              <h3>LINE MUSIC</h3>
              <p>全方位音樂服務，不只聽音樂、換鈴聲，還能練唱！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product10} alt='損壞'/>
              <h3>LINE WEBTOON 每日漫畫</h3>
              <p>台灣最大漫畫平台，風靡全世界的熱門漫畫每日更新中，追了才酷，一看就停不下來！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product11} alt='損壞'/>
              <h3>LINE旅遊</h3>
              <p>排行程、找景點、機票住宿比價，一站俱全！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product12} alt='損壞'/>
              <h3>LINE熱點</h3>
              <p>查找店家和優惠，串連生活便利工具的小幫手</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product13} alt='損壞'/>
              <h3>LINE TAXI	</h3>
              <p>用科技改變你的交通方式,無需下載 App，用 LINE 即可預約計程車的叫車服務</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product14} alt='損壞'/>
              <h3>LINE購物</h3>
              <p>先LINE購物再購物</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product15} alt='損壞'/>
              <h3>LINE禮物</h3>
              <p>即時禮到心裡</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product16} alt='損壞'/>
              <h3>LINE口袋商店</h3>
              <p>LINE 官方嚴選，精選好物打造好感生活</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product17} alt='損壞'/>
              <h3>LINE FRIENDS</h3>
              <p>LINE FRIENDS是創意IP工作室，創作出溫暖可愛的「BROWN & FRIENDS」以及風行世界的「BT21」。旗下兩大IP衍生內容包含動畫、遊戲，並與世界各地知名品牌聯名合作。</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product18} alt='損壞'/>
              <h3>LINE拍貼-Creators Studio</h3>
              <p>用智慧手機就能輕鬆製作！快來自製專屬貼圖♪</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product19} alt='損壞'/>
              <h3>LINE訊息查證</h3>
              <p>LINE 官方訊息查證，先查證再轉傳，杜絕假訊息！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product20} alt='損壞'/>
              <h3>LINE Pay</h3>
              <p>付款、轉帳、生活繳費，輕鬆簡單又便利！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product21} alt='損壞'/>
              <h3>LINE Bank</h3>
              <p>Banking In Your Hand.</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product22} alt='損壞'/>
              <h3>LINE新星計畫</h3>
              <p>邀請您一同加入成為LINE「智慧入口」的一份子，開啟瞬聯時代，您的獨特創意將透過LINE服務到每一位使用者，創造更美好的生活！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product23} alt='損壞'/>
              <h3>LINE官方帳號</h3>
              <p>輕鬆貼近好友，經營良好關係</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product24} alt='損壞'/>
              <h3>LINE POINTS</h3>
              <p>完成任務快速集點！利用超夯點數，提升活動參與度</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product25} alt='損壞'/>
              <h3>LINE Beacon</h3>
              <p>主動導客，再創回流</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product26} alt='損壞'/>
              <h3>LINE 樂兌</h3>
              <p>更聰明效率的派樣形式</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product27} alt='損壞'/>
              <h3>LINE TODAY</h3>
              <p>隨點隨看 生活快充</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product28} alt='損壞'/>
              <h3>LINE HUB</h3>
              <p>LINE服務的入口，新聞、影劇、購物、旅遊、貼圖、漫畫等豐富多樣的內容，等您來發掘！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product29} alt='損壞'/>
              <h3>B612</h3>
              <p>每天讓你開心的相機</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product30} alt='損壞'/>
              <h3>LOOKS</h3>
              <p>美妝自拍相機</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product31} alt='損壞'/>
              <h3>LINE Camera</h3>
              <p>修圖、調色、裝飾樣樣行，照片編輯利器！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product32} alt='損壞'/>
              <h3>Foodie	</h3>
              <p>使用各種濾鏡修圖</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product33} alt='損壞'/>
              <h3>Tsum Tsum Stadium</h3>
              <p>Tsum Tsum 系列競賽益智手遊來囉！ 挑戰 50 人即時對戰，和全球玩家一較高下！搭配你的專屬 Tsum 造型上場吧！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product34} alt='損壞'/>
              <h3>LINE：哆啦A夢樂園</h3>
              <p>一起來玩由各種祕密道具組成的三消遊戲！來和哆啦A夢的角色們一起冒險吧！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product35} alt='損壞'/>
              <h3>LINE 貓咪咖啡廳</h3>
              <p>愛貓者的天堂！與可愛的貓咪們一起放鬆一起遊戲吧！打造獨一無二的風格成為最受矚目的咖啡廳！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product36} alt='損壞'/>
              <h3>LINE HELLO BT21</h3>
              <p>HELLO BT21，LINE Bubble 系列的最新遊戲！BT21 的角色們都在益智遊戲內！與可愛的 BT21 角色合作，拯救長滿巨大蒲公英的世界吧！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product37} alt='損壞'/>
              <h3>JUMPUTI HEROES 英雄氣泡</h3>
              <p>日本 JUMP 超人氣動漫角色大集結！簡單爽快的氣泡消珠戰鬥，單人出擊或與好友聯手擊敗敵人吧！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product38} alt='損壞'/>
              <h3>LINE 熊大上菜</h3>
              <p>跟著熊大主廚一起前往料理的頂級世界吧！各式各樣的料理等你來挑戰！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product39} alt='損壞'/>
              <h3>LINE：鋼彈大亂鬥</h3>
              <p>全新體驗的鋼彈遊戲登場！ 操作簡單且含有大量深度挑戰要素！快來挑戰全新型態的突擊戰鬥遊戲！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product40} alt='損壞'/>
              <h3>LINE 熊大農場</h3>
              <p>超人氣LINE卡通明星「熊大」開始經營農場了！？ 快來跟大夥們歡樂打造屬於自己的農場！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product41} alt='損壞'/>
              <h3>LINE：ONE PIECE 秘寶尋航</h3>
              <p>親身體驗 ONE PIECE 的世界！ 熱血刺激的 RPG 點擊戰鬥，重新感受航海王經典時刻！ 快來用超強必殺技擊退敵人吧！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product42} alt='損壞'/>
              <h3>LINE Bubble 2</h3>
              <p>為了尋找熊大，兔兔跟火龍尼可展開了全新冒險。 豐富又有趣的關卡，快來加入超好玩的消泡泡冒險之旅吧！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product43} alt='損壞'/>
              <h3>LINE 熊貓連連看</h3>
              <p>輕鬆上手！超上癮的經典消除玩法，與熊貓 Tan Tan 和他的好朋友一起踏上精彩的冒險旅程！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product44} alt='損壞'/>
              <h3>LINE PokoPoko 決戰波兔森林</h3>
              <p>只需要湊齊並消除方塊就能享受有趣又刺激的益智遊戲樂趣，和兔子 POKOTA 一起來收集幸運草及櫻桃、挑戰各種關卡吧！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product45} alt='損壞'/>
              <h3>LINE Rangers</h3>
              <p>簡單暢快正統塔防 RPG 遊戲！為了拯救被外星人軍團綁架的莎莉，和熊大、兔兔、饅頭人等 LINE 卡通明星夥伴們一起成為銀河特攻隊，並肩戰鬥吧！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product46} alt='損壞'/>
              <h3>LINE：Disney Tsum Tsum</h3>
              <p>最可愛的迪士尼毛絨公仔消除遊戲，輕鬆串連就能贏得高分！超多超萌Tsum Tsum等你來蒐集！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product47} alt='損壞'/>
              <h3>LINE Pokopang</h3>
              <p>透過一筆畫的方式將相同顏色的方塊連在一起即可得分，還可透過提高等級、提升攻擊力來加速得分腳步，快來和粉紅兔子POKOTA及可愛角色們合力打倒怪物吧！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product48} alt='損壞'/>
              <h3>LINE PLAY 我們的祕密世界</h3>
              <p>【全世界玩家達7,000萬人】 在遊戲中做自己！創造出自己專屬的虛擬人偶，來跟全世界的朋友們同樂吧～</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product49} alt='損壞'/>
              <h3>LINE 波兔小鎮</h3>
              <p>只要點擊就能消除可愛造型方塊的超爽快益智遊戲！</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
            <div className='product-box'>
              <img src={product50} alt='損壞'/>
              <h3>LINE 動物大富豪</h3>
              <p>撲克牌玩法再進化! 駕馭規則不受限!</p>
              <FontAwesomeIcon icon={faEllipsisH} className='ellipsish'/>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )




}

export default Line;