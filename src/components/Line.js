import LineLogo from './image/icon-title-pc.png';
import LangIcon from './image/icon-lang-b.png';
import SmLineLogo from './image/icon-line-w.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple ,faFacebook,faGooglePlay , faWindows, faYoutube} from '@fortawesome/free-brands-svg-icons'
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
import IconLine from './image/icon-line.png'
import Communication from './Communication';
import ProductBox from './ProductBox';




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
          <Communication
            img={content1}
            title='聊天、語音通話&視訊通話'
            content='能夠和好友一對一或多人群組訊息聊天，或是進行語音、視訊通話。'
          />
          <Communication
            img={content2}
            title='貼圖＆表情貼＆主題'
            content='使用有趣的貼圖或表情貼豐富聊天，也能更換超讚的主題來表達自己。'
          />
          <Communication
            img={content3}
            title='主頁'
            content='可以快速連結 LINE 的各種服務，包含貼圖等多樣的內容資訊。'
          />
          <Communication
            img={content4}
            title='社群'
            content='輕鬆分享共同興趣、開心聊出好麻吉。'
          />
          <Communication
            img={content5}
            title='貼文串'
            content='供你分享你的近況，或是瞭解好友的最新消息。透過「探索」功能，能找到更多你喜愛的內容。'
          />
          <Communication
            img={content6}
            title='錢包'
            content='使用「 LINE Pay 」可以進行安全方便的行動付款或轉帳，也能使用其他金融相關服務。'
          />
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
            <ProductBox
              img={product1}
              title='LINE Messenger'
              content='拉近人與人、人與資訊及應用服務間的距離的通訊軟體'
            />
            <ProductBox
              img={product2}
              title='LINE STORE'
              content='可購買 LINE 貼圖、主題或遊戲中貨幣的官方線上商店'
            />
            <ProductBox
              img={product3}
              title='LINE貼文串'
              content='探索樂趣，分享生活'
            />
            <ProductBox
              img={product4}
              title='LINE Antivirus'
              content='在「LINE Antivirus」執行幾個簡單的步驟， 就能保護智慧手機上個人資訊的安全， 並可免於病毒或惡意程式的侵害。(限Android版本)'
            />
            <ProductBox
              img={product5}
              title='LINE社群'
              content='輕鬆分享共同興趣、開心聊出好麻吉。'
            />
            <ProductBox
              img={product6}
              title='LINE TV'
              content='共享追劇生活'
            />
            <ProductBox
              img={product7}
              title='LINE GAME'
              content='LAYTIME ANYTIME！ 隨時隨地和朋友一起玩！'
            />
            <ProductBox
              img={product8}
              title='LINE POD	'
              content='全新 PC 遊戲平台，用 LINE 帳號暢玩各種線上遊戲！'
            />
            <ProductBox
              img={product9}
              title='LINE MUSIC'
              content='全方位音樂服務，不只聽音樂、換鈴聲，還能練唱！'
            />
            <ProductBox
              img={product10}
              title='LINE WEBTOON 每日漫畫'
              content='台灣最大漫畫平台，風靡全世界的熱門漫畫每日更新中，追了才酷，一看就停不下來！'
            />
            <ProductBox
              img={product11}
              title='LINE旅遊'
              content='排行程、找景點、機票住宿比價，一站俱全！'
            />
            <ProductBox
              img={product12}
              title='LINE熱點'
              content='查找店家和優惠，串連生活便利工具的小幫手'
            />
            <ProductBox
              img={product13}
              title='LINE TAXI	'
              content='用科技改變你的交通方式,無需下載 App，用 LINE 即可預約計程車的叫車服務'
            />
            <ProductBox
              img={product14}
              title='LINE購物'
              content='先LINE購物再購物'
            />
            <ProductBox
              img={product15}
              title='LINE禮物'
              content='即時禮到心裡'
            />
            <ProductBox
              img={product16}
              title='LINE口袋商店'
              content='INE 官方嚴選，精選好物打造好感生活'
            />
            <ProductBox
              img={product17}
              title='LINE FRIENDS'
              content='INE FRIENDS是創意IP工作室，創作出溫暖可愛的「BROWN & FRIENDS」以及風行世界的「BT21」。旗下兩大IP衍生內容包含動畫、遊戲，並與世界各地知名品牌聯名合作。'
            />
            <ProductBox
              img={product18}
              title='LINE拍貼-Creators Studio'
              content='用智慧手機就能輕鬆製作！快來自製專屬貼圖♪'
            />
            <ProductBox
              img={product19}
              title='LINE訊息查證'
              content='INE 官方訊息查證，先查證再轉傳，杜絕假訊息！'
            />
            <ProductBox
              img={product20}
              title='LINE Pay'
              content='付款、轉帳、生活繳費，輕鬆簡單又便利！'
            />
            <ProductBox
              img={product21}
              title='LINE Bank'
              content='anking In Your Hand.'
            />
            <ProductBox
              img={product22}
              title='LINE新星計畫'
              content='邀請您一同加入成為LINE「智慧入口」的一份子，開啟瞬聯時代，您的獨特創意將透過LINE服務到每一位使用者，創造更美好的生活！'
            />
            <ProductBox
              img={product23}
              title='LINE官方帳號'
              content='輕鬆貼近好友，經營良好關係'
            />
            <ProductBox
              img={product24}
              title='LINE POINTS'
              content='完成任務快速集點！利用超夯點數，提升活動參與度'
            />
            <ProductBox
              img={product25}
              title='LINE Beacon'
              content='主動導客，再創回流'
            />
            <ProductBox
              img={product26}
              title='LINE 樂兌'
              content='更聰明效率的派樣形式'
            />
            <ProductBox
              img={product27}
              title='LINE TODAY'
              content='隨點隨看 生活快充'
            />
            <ProductBox
              img={product28}
              title='LINE HUB'
              content='INE服務的入口，新聞、影劇、購物、旅遊、貼圖、漫畫等豐富多樣的內容，等您來發掘！'
            />
            <ProductBox
              img={product29}
              title='B612'
              content='每天讓你開心的相機'
            />
            <ProductBox
              img={product30}
              title='LOOKS'
              content='美妝自拍相機'
            />
            <ProductBox
              img={product31}
              title='LINE Camera'
              content='修圖、調色、裝飾樣樣行，照片編輯利器！'
            />
            <ProductBox
              img={product32}
              title='Foodie	'
              content='使用各種濾鏡修圖'
            />
            <ProductBox
              img={product33}
              title='Tsum Tsum Stadium'
              content='sum Tsum 系列競賽益智手遊來囉！ 挑戰 50 人即時對戰，和全球玩家一較高下！搭配你的專屬 Tsum 造型上場吧！'
            />
            <ProductBox
              img={product34}
              title='LINE：哆啦A夢樂園'
              content='一起來玩由各種祕密道具組成的三消遊戲！來和哆啦A夢的角色們一起冒險吧！'
            />
            <ProductBox
              img={product35}
              title='LINE 貓咪咖啡廳'
              content='愛貓者的天堂！與可愛的貓咪們一起放鬆一起遊戲吧！打造獨一無二的風格成為最受矚目的咖啡廳！'
            />
            <ProductBox
              img={product36}
              title='LINE HELLO BT21'
              content='ELLO BT21，LINE Bubble 系列的最新遊戲！BT21 的角色們都在益智遊戲內！與可愛的 BT21 角色合作，拯救長滿巨大蒲公英的世界吧！'
            />
            <ProductBox
              img={product37}
              title='JUMPUTI HEROES 英雄氣泡'
              content='日本 JUMP 超人氣動漫角色大集結！簡單爽快的氣泡消珠戰鬥，單人出擊或與好友聯手擊敗敵人吧！'
            />
            <ProductBox
              img={product38}
              title='LINE 熊大上菜'
              content='跟著熊大主廚一起前往料理的頂級世界吧！各式各樣的料理等你來挑戰！'
            />
            <ProductBox
              img={product39}
              title='LINE：鋼彈大亂鬥'
              content='全新體驗的鋼彈遊戲登場！ 操作簡單且含有大量深度挑戰要素！快來挑戰全新型態的突擊戰鬥遊戲！'
            />
            <ProductBox
              img={product40}
              title='LINE 熊大農場'
              content='超人氣LINE卡通明星「熊大」開始經營農場了！？ 快來跟大夥們歡樂打造屬於自己的農場！'
            />
            <ProductBox
              img={product41}
              title='LINE：ONE PIECE 秘寶尋航'
              content='親身體驗 ONE PIECE 的世界！ 熱血刺激的 RPG 點擊戰鬥，重新感受航海王經典時刻！ 快來用超強必殺技擊退敵人吧！'
            />
            <ProductBox
              img={product42}
              title='LINE Bubble 2'
              content='為了尋找熊大，兔兔跟火龍尼可展開了全新冒險。 豐富又有趣的關卡，快來加入超好玩的消泡泡冒險之旅吧！'
            />
            <ProductBox
              img={product43}
              title='LINE 熊貓連連看'
              content='輕鬆上手！超上癮的經典消除玩法，與熊貓 Tan Tan 和他的好朋友一起踏上精彩的冒險旅程！'
            />
            <ProductBox
              img={product44}
              title='LINE PokoPoko 決戰波兔森林'
              content='只需要湊齊並消除方塊就能享受有趣又刺激的益智遊戲樂趣，和兔子 POKOTA 一起來收集幸運草及櫻桃、挑戰各種關卡吧！'
            />
            <ProductBox
              img={product45}
              title='LINE Rangers'
              content='簡單暢快正統塔防 RPG 遊戲！為了拯救被外星人軍團綁架的莎莉，和熊大、兔兔、饅頭人等 LINE 卡通明星夥伴們一起成為銀河特攻隊，並肩戰鬥吧！'
            />
            <ProductBox
              img={product46}
              title='LINE：Disney Tsum Tsum'
              content='最可愛的迪士尼毛絨公仔消除遊戲，輕鬆串連就能贏得高分！超多超萌Tsum Tsum等你來蒐集！'
            />
            <ProductBox
              img={product47}
              title='LINE Pokopang'
              content='透過一筆畫的方式將相同顏色的方塊連在一起即可得分，還可透過提高等級、提升攻擊力來加速得分腳步，快來和粉紅兔子POKOTA及可愛角色們合力打倒怪物吧！'
            />
            <ProductBox
              img={product48}
              title='LINE PLAY 我們的祕密世界'
              content='【全世界玩家達7,000萬人】 在遊戲中做自己！創造出自己專屬的虛擬人偶，來跟全世界的朋友們同樂吧～'
            />
            <ProductBox
              img={product49}
              title='LINE 波兔小鎮'
              content='只要點擊就能消除可愛造型方塊的超爽快益智遊戲！'
            />
            <ProductBox
              img={product50}
              title='LINE 動物大富豪'
              content='撲克牌玩法再進化! 駕馭規則不受限!'
            />
        </div>
      </div>
      </div>
    </main>
    <footer>
      <div className='footer-wrapper'>
        <ul>
          <li><img src={IconLine} alt='損壞'/></li>
          <a href='#'><li><FontAwesomeIcon icon={faApple} className='icon apple'/>App Store</li></a>
          <a href='#'><li><FontAwesomeIcon icon={faGooglePlay} className='icon google' />Google Play</li></a>
          <a href='#'><li><FontAwesomeIcon icon={faDesktop} className='icon desktop' />Desktop</li></a>
          <a href='#'><li><FontAwesomeIcon icon={faWindows} className='icon windows' />Windows Store</li></a>
          <a href='#'><li>Chrome</li></a>
          <a href='#'><li>APK</li></a>
          <a href='#'><li>Screen Saver</li></a>
        </ul>
        <div className='footerOther'>
          <ul className='LastUl'>
            <li className='FirstLi'>© LINE Corporation</li>
            <a href='#'><li>常見問題</li></a>
            <a href='#'><li>服務條款</li></a>
            <a href='#'><li>隱私權政策</li></a>
            <a href='#'><li>註冊及移動帳號</li></a>
          </ul>
          <div className='other'>Family sites -</div>
          <div className='icon-wrapper'>
            <a href='#'><FontAwesomeIcon icon={faYoutube} /></a>
            <a href='#'><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
        </div>
        
      </div>
    </footer>
    </>
  )




}

export default Line;