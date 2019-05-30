import React from "react";


export default (props => {
    const {bag_type, item_count} = props;
    return (
        <div className="row">
          <div className="card pack--bag-width">
            <div className="card-body">
              <h5 className="card-title">{bag_type}</h5>
              <p className="card-text"> 
                <span>{item_count} Items unpacked</span>
              </p>
            </div>
          </div>
        </div>
    );
});