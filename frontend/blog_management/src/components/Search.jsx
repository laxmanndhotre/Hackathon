import React from 'react';
// FIX 1: Import CardContainer here
import CardContainer from './CardContainer';


function Search() {
  return (
    
    <div>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
            <div className="position-relative" style={{width: '90%', maxWidth: '800px'}}>
                <input type="text" className="form-control" placeholder="Type to search..."/>
                <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3"></i>
            </div>
        </div>
    
    <CardContainer/>

    </div>
  );
}

export default Search;
