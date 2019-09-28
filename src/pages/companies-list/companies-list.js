import React from 'react';
import SiteHeader from '../../global/header/site-header';
import SiteContent from './site-content/site-content';

class CompaniesList extends React.Component {
  render() {
    return (
      <div className="page">
        <SiteHeader />
        <SiteContent />
      </div>
    );
  }
}

export default CompaniesList;
