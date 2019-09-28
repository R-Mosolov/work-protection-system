import React from 'react';

import './css/desktop.css';
import './css/tablet-and-mobile.css';

const SiteContent = () => {
  return (
    <div className="login">
      <div className="container__position d-flex justify-content-center align-items-center">
        <div className="layout-positioner">
          <form className="px-4 py-3">
            <h1 className="hide-header text-center">Страница настроек</h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SiteContent;
