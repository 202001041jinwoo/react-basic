import React from 'react';
import './InnerSection.css';  
import {useNavigate} from 'react-router-dom';

const InnerSection = () => {
  const navigate = useNavigate();
  const handleMoreClick = () => {
    navigate('/blogs');  
  };
  return (
    <section className="inner">
      <div className="middle-container">
        <div className = "middle-img" >
            <img src="main2-bottom.png" alt="메인 콘텐츠 이미지" class="middle-image" />
            <div className =" middle-box-container">
              <div className="img-container">
                <button className="skill">
                  <img src= "/book.png" alt="책" className="box1" />
                  <p>스터디룸 예약</p>
                </button>
                <button className="skill">
                  <img src="/coding.png" alt="코딩존" className="box2" />
                  <p>코딩존 예약</p>
                </button>
                <button className="skill">
                  <img src="/computer.png" alt="컴퓨터" className="box3" />
                  <p>advice</p>
                </button>
              </div>
            </div>
        </div>
        <div className="middle-note" id="more">
            <div className="middle-note-top">
                <p className="ice">Icebreaker</p>
                <button onClick={handleMoreClick} className="note">더보기+</button>   
            </div>
            <div className="middle-note-middle">
              <img src="Vector.png"   className="vector"/>
            </div>
            <div className = "middle-note-bottom">
              <button className ="Text"></button>
              <button className ="Text"></button>
              <button className ="Text"></button>

            </div>
        </div>
      </div>
    </section>
  );
}

export default InnerSection;
