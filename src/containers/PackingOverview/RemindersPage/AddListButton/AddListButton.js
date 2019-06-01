import React from "react";

export default props => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <p>
            <a
              className="btn btn-primary"
              data-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >
              +Add
            </a>
          </p>
          <div className="row">
            <div className="col">
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample1"
              >
                <div className="card card-body">
                  Name of List
                  <hr />
                  <div className="input-group mb-3">
                    <select className="custom-select" id="inputGroupSelect01">
                      <option defaultValue>Choose one...</option>
                      <option value="1">To-Do List</option>
                      <option value="2">Shopping List</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
