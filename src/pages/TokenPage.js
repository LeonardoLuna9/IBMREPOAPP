import React from 'react';
import Token from '../components/Token/Token';

const TokenPage = () => {
  return (
    <div className='token-container'>
          <Token urlEnd='http://104.248.232.61/verify-otp'/>
      <div className="rectangulo"></div>
    </div>
  );
};

export default TokenPage;