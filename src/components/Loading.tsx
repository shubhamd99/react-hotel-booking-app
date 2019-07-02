import React from 'react';
import loadingGif from "../assets/images/gif/loading-arrow.gif";

const Loading: React.FC = () => {
    return (
    <div className="loading">
      <h4>rooms data loading....</h4>
      <img src={loadingGif} alt="loading..." />
    </div>
    )
}

export default Loading;
