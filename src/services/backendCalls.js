/*
make an axios call to:
--create a trip
--make 3 bags
--make the items

then make a func that takes care of these 3 funcs

then make a func where we pass in the data and 
do stuff with it and get back the ID to send the 
user off
*/

import axios from "axios";
import { randomTripNameGenerator, splitDestination } from "./suggestions";

const BASE_URL = "http://localhost:5000";

const createTrip = (destination, departureDate, returnDate, user_id = null) => {
  let temp = splitDestination(destination);
  let name = randomTripNameGenerator(temp.city);

  return axios({
    method: "post",
    url: BASE_URL + "/trip/",
    data: {
      name,
      city: temp.city,
      country: temp.country,
      departure_date: departureDate,
      return_date: returnDate,
      user_id
    }
  });
};

const createBag = (trip_id, type_id) => {
  return axios({
    method: "post",
    url: BASE_URL + "/bag/",
    data: {
      trip_id,
      type_id
    }
  });
};

const buildBundle = (
  items,
  destination,
  departureDate,
  returnDate,
  user_id = null
) => {
  return createTrip(
    destination,
    departureDate,
    returnDate,
    (user_id = null)
  ).then(({ data: { id } }) => {
    const personal = createBag(id, 1);
    const carry_on = createBag(id, 2);
    const checked = createBag(id, 3);
    return Promise.all([personal, carry_on, checked]);
  });
  // .then((data) => {
  //     console.log(data);
  // })
  // .catch(err => {
  //     console.log(err);
  // })
};

export { createTrip, buildBundle };
