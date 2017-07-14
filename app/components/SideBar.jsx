import React from 'react';
import CampusList from './CampusList';

export default function Sidebar () {

  return (
    <sidebar>
      <div className="sidebar-header">
        <h3 href="#">
          <div>Senior-Enrichment</div>
        </h3>
      </div>
      <h5>Campuses</h5>
      <CampusList />
    </sidebar>
  );
}
