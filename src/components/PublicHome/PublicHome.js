import React from "react";
import "./PublicHome.css";
import BundleLogo from "../../assets/images/logo/bundle_logo.svg";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const PublicHome = props => {
  const { create_trip_form, loading } = props;

  return (
    <>
      {!loading ? null : <LoadingScreen />}
      <div className="publicHomeBanner container-fluid mb-5 min-vh-100">
        <div className="row p-5 h-75">
          <div className="col-sm m-5 pt-0 px-5 pb-2">
            <img src={BundleLogo} width="150" height="150" alt="Bundle" />
            <h2 className="c-white mali700 mt-5 h1">
              Worry less, travel more!
            </h2>
          </div>

          <div className="col-sm m-5 p-5 bg-huate80 b-radius9 pb-5">
            <h2 className="c-bundleBlue mali700 mb-5 h1">Let's get packing!</h2>
            {create_trip_form}
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicHome;
