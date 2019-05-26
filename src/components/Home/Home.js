import React, { useState, useEffect } from 'react';
import './Home.css';
import CreateTripForm from '../../containers/CreateTripForm/CreateTripForm';
import Modal from "../../containers/Modal/Modal";
import { getDuration } from '../../services/suggestions';


const Home = props => {

    const [destination, setDestination] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [duration, setDuration] = useState(null);
    const [show, showmodal] = useState(false);

    const destinationHandler = e => {
        setDestination(e.target.value);
    };

    const departureDateHandler = e => {
        setDepartureDate(e.target.value);
    };

    const returnDateHandler = e => {
        setReturnDate(e.target.value);
    };

    const createTripHandler = e => {
        e.preventDefault();
        let tripDuration = getDuration(departureDate, returnDate)
        if (tripDuration.slice(' ')[0] === 'a') {
            tripDuration = 1
        }
        else {
            tripDuration = tripDuration.slice(' ')[0]
        }
        setDuration(tripDuration)
        showmodal(true);
    };

    const handleShow = () => showmodal(true);

    const handleClose = () => showmodal(false);
    // should this be part of useEffect cleanup?

    useEffect(() => {
        console.log(departureDate, "changed");
        console.log(returnDate, "changed!!!");
        console.log(duration, "duration now set")
    }, [destination, departureDate, returnDate, duration])


    return (
        <>
            {show ? (
                <Modal 
                    duration={duration} 
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose} 
                    modalButtonText={"Bundle It!"}
                    modalContent={"Hello world"}
                /> 
            ) : ( 
                null )}

            <div className='bundleHomeImage'>
                <h1 className='bundleHomeImageTitle'>Bundle</h1>
                <h2 className='bundleHomeImageTagline'>Worry less, travel more!</h2>
                <CreateTripForm 
                    destination={destination}
                    destinationHandler={destinationHandler}
                    departureDate={departureDate}
                    departureDateHandler={departureDateHandler}
                    returnDate={returnDate}
                    returnDateHandler={returnDateHandler}
                    duration={duration}
                    createTripHandler={createTripHandler}
                />
            </div>

            <div className='bundleHomeArrow'></div>

            <div className="container bundleHomeWhatBox">
                <div className="row">
                    <div className="col-sm">
                        <div className='bundleHomeWhatPhotoBox'></div>
                    </div>
                    <div className="col-sm">
                        <h2>What's Bundle?</h2>
                        <p>
                            We provide a trip-management hub for inexperienced
                            travelers to keep track of all their necessities.
                            They’ll have a smoother and more enjoyable experience
                            preparing for it because they can address all their
                            travel considerations from one place.
                            Bundle creates suggested packing checklists and help
                            complete them with in-app planning until day of departure.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid bundleHomeGetPackingBox">
                <h1>What are you waiting for? Get Packing!</h1>
            </div>
        </>
    );
};

export default Home;