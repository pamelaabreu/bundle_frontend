import React, { useState, useEffect } from "react";
import moment from "moment";
import "./CreateTripForm.css";
import { DateRangePicker } from "react-dates";
import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-dom";
import Places from "../../services/widget";

export default props => {
  const { startDateHandler, endDateHandler } = props;

  const [focusedInput, setFocusInput] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    startDateHandler(moment(startDate).format("YYYY-MM-DD"));
  }, [startDate, startDateHandler]);

  useEffect(() => {
    endDateHandler(moment(endDate).format("YYYY-MM-DD"));
  }, [endDate, endDateHandler]);

  const disabledButtonDisplay = props.disabled
    ? "bg-smokeGrey createTripform-button-disabled"
    : "bg-denimBlue createTripform-button";

  const onDateChange = (startDate, endDate) => {
    setEndDate(endDate);
    setStartDate(startDate);
  };

  const searchClient = algoliasearch(
    "plT58M4G3D5I",
    "4bcfd5173b255b51aae8491409e4ab29"
  );

  console.log(props);
  return (
    <form className="px-1 pb-1 pt-0 w-100" onSubmit={props.createTripHandler}>
      <div className="form-group mx-1 mb-5">
        <label htmlFor="destination" className="c-huate mali700 h1 mb-4">
          Enter your destination:
        </label>

        <div className="d-flex">
          <InstantSearch indexName="airports" searchClient={searchClient}>
            <Places
              destinationHandler={props.destinationHandler}
              defaultRefinement={{
                lat: 37.7793,
                lng: -122.419
              }}
            />
          </InstantSearch>
          {/*<input
            className="createTripform-input c-smokeBlack mali400 border-0 p-3 w-100"
            type="text"
            name="destination"
            placeholder="City, Country"
            aria-label="Destination by City, Country"
            aria-describedby="basic-addon1"   
            required
  />*/}
        </div>
      </div>

      <div className="form-group mx-1 mb-5">
        <label htmlFor="date" className="c-huate mali700 h1 mb-4">
          Enter your dates:
        </label>
        <DateRangePicker
          noBorder={true}
          block={true}
          numberOfMonths={1}
          daySize={26}
          screenReaderInputMessage={"Enter your depature and return date."}
          showDefaultInputIcon={true}
          hideKeyboardShortcutsPanel={true}
          startDate={startDate}
          startDateId="startDate"
          endDateId="endDate"
          endDate={endDate}
          onDatesChange={({ startDate, endDate }) =>
            onDateChange(startDate, endDate)
          }
          focusedInput={focusedInput}
          onFocusChange={focusedInput => setFocusInput(focusedInput)}
        />
      </div>
      <div className="d-flex my-5 justify-content-center">
        <button
          type="submit button"
          className={
            "w-100 h-100 border-0 p-3 b-radius9 display-4 c-white baloo " +
            disabledButtonDisplay
          }
          data-toggle="modal"
          data-target="#modalScrollable"
          disabled={props.disabled}
        >
          Next
        </button>
      </div>
    </form>
  );
};
