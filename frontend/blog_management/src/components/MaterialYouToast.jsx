import React from 'react';

const MaterialYouToast = ({ title, description, icon }) => {

  return (
    <div className="material-you-toast-container"> 
      {icon && ( 
        <div className="material-you-toast-icon">
          {icon}
        </div>
      )}
      <div>
        <p className="material-you-toast-title">{title}</p>
        {description && <p className="material-you-toast-description">{description}</p>}
      </div>
    </div>
  );
};

export default MaterialYouToast;
