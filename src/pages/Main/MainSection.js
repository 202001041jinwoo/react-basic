import React, {useState} from 'react';
import './MainSection.css';  

const options = [
  { id: 1, iconClass: 'fas fa-walking', mainText: '코딩존', subText: '머시기 머시기', backgroundImage: 'Frame2.png' },
  { id: 2, iconClass: 'fas fa-snowflake', mainText: '스터디룸 이용', subText: '머시기 머시기', backgroundImage: 'Frame1.png' },
  { id: 3, iconClass: 'fas fa-tree', mainText: '정스', subText: '머시기 머시기', backgroundImage: 'Frame3.png' }
];

const MainSection = () => {
  const [activeOption, setActiveOption] = useState(options[0].id); 

  const handleOptionClick = (id) => {
    setActiveOption(id);  
  };
  return (
    <section className="main">
      <div className="main-container">
        <div className="main-img" justify-content-center>
          <img src="header-img.PNG" alt="메인 콘텐츠 이미지" className="top-image" /> 
          <div className="box-container">
            <div className="options">
              {options.map((option) => (
                      <div
                        key={option.id}
                        className={`option ${option.id === activeOption ? 'active' : ''}`}  
                        style={{ '--optionBackground': `url('${option.backgroundImage}')` }}
                        onClick={() => handleOptionClick(option.id)}  
                      >
                        <div className="shadow"></div>
                        <div className="label">
                          <div className="icon">
                            <i className={option.iconClass}></i>
                          </div>
                          <div className="info">
                            <div className="main">{option.mainText}</div>
                            <div className="sub">{option.subText}</div>
                          </div>
                        </div>
                      </div>
                    ))}
            </div>   
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;

