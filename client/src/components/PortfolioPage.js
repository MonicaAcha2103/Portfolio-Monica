import React from 'react';
const PortfolioPage = (props) => {
    return(
  <div>
  <h1>Portfolio</h1>
  {props.match.params.id}

  </div>  
);
}
export default PortfolioPage;