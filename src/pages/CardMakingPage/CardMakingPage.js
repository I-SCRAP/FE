import React from 'react'
import './CardMakingPage.css';
import Nav from '../../components/Nav/Nav';
import CardFront from '../../assets/cardfront.svg';
import CardBack from '../../assets/cardback.svg';
import CardWriting from '../../assets/cardwriting.svg';
import Reset from '../../assets/goback.svg';
import GoForward from '../../assets/goforward.svg';
import GoBack from '../../assets/reset.svg';


export default function CardMakingPage() {
  return (
    <>
      <Nav />
      <div className='card-making-container'>

        <div>
          <div className='making-button-container'>

            <div className='making-button'>
              <img className='making-button-img' src={CardBack} />
              <div className='making-button-text'>카드제작</div>
            </div>
            <div className='making-button'>
              <img className='making-button-img' src={CardWriting} />
              <div className='making-button-text'>뒷면제작</div>
            </div>
            <div className='making-button'>
              <img className='making-button-img' src={CardFront} />
              <div className='making-button-text'>기록쓰기</div>
            </div>
          </div>
          <div className='saving-button-container'>
            <button className='moving-button'>보관함</button>
            <button className='card-save-button'>저장</button>
          </div>
        </div>

        <div className='card-container'>
          <div className='open-or-not'>
            <button className='open-button'>공개</button>
            <button className='open-button'>비공개</button>
          </div>
          <div className='making-card-text'>
            <p>팝업카드 만들기  </p>
            <p className='making-card-option'>FRONT</p>
          </div>
          <div className='making-card-view'>
            <div className='adjust-buttons'>
              <img src={GoBack}/>
              <img src={GoForward}/>
              <img src={Reset}/>
            </div>
            <div className='maked-card'>만드는 카드 그림</div>
          </div>
        </div>

        <div className='custom-options'>
          <div className='add-text'>
            <div>텍스트</div>
            <button className='add-text-button'>추가하기</button>
          </div>
          <div className='rayout-font'>
            <div className='rayout'>레이아웃</div>
            <div className='font'>폰트</div>
          </div>
          <div className='image-sticker-background'>
            <div className='image'>사진선택</div>
            <div className='sticker'>스티커</div>
            <div className='background'>배경색</div>
          </div>
        </div>
      </div >
    </>

  )
}
