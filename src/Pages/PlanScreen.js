import React from 'react';
import './PlanScreen.css';
function PlanScreen() {
  return (
    <div classNamea='plan-screen'>
      <div className='plan-screen-plan'>
        <div className='plan'>
          <div className='plan-detail'>
            <h5>Premium</h5>
            <h6>4K + HDR</h6>
          </div>
          <button className='sub-btn'>Subscribe</button>
        </div>
        <div className='plan'>
          <div className='plan-detail'>
            <h5>Standard</h5>
            <h6>1080p</h6>
          </div>
          <button className='sub-btn'>Subscribe</button>
        </div>
        <div className='plan'>
          <div className='plan-detail'>
            <h5>Basic</h5>
            <h6>720p</h6>
          </div>
          <button className='sub-btn'>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default PlanScreen;
