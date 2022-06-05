import React from 'react';
import st from './spinner.m.css'

const Spinner = () => {
  return (<div className='loaderWrapper'>
      <div className={st.loader + ' ' + st.loader2}>
        <svg className={st.loaderStar} version="1.1">
          <polygon
            points="29.8 0.3 22.8 21.8 0 21.8 18.5 35.2 11.5 56.7 29.8 43.4 48.2 56.7 41.2 35.1 59.6 21.8 36.8 21.8 "
            fill="#662d91"/>
        </svg>
        <div className={st.loaderCircles} />
      </div>
    </div>
  );
};

export default Spinner;