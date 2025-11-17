import React from 'react';

const MaterialWelcomeYouToast = ({ title, description, status }) => {
  const statusClass = status === 'success' ? 'material-toast-success' : 'material-toast-error';
  const iconText = status === 'success' ? '✔️' : '❌';

  return (
    <div className={`material-toast-container ${statusClass}`}>
      <div className="material-toast-icon">
        {iconText} 
        { ' '}
        { ' '}
      </div>
      <div>
        <p className="material-toast-title">{title}</p>
        {description && <p className="material-toast-description">{description}</p>}
      </div>
    </div>
  );
};

export default MaterialWelcomeYouToast;
