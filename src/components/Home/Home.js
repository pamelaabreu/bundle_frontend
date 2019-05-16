import React from 'react';
import './Home.css';

const Home = props => {
    return (
        <>
            <div className='bundleHomeImage'>
                <h1>Bundle</h1>
                <h2>Worries less...</h2>
                <button>Placeholder for Create Trip</button>
            </div>
            
            <div className='bundleHomeArrow'></div>
            
            <div class="container bundleHomeWhatBox">
                <div class="row">
                    <div class="col-sm">
                        <div className='bundleHomeWhatPhotoBox'></div>
                    </div>
                    <div class="col-sm">
                        <h2>What's Bundle</h2>
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
            
            <div class="container-fluid bundleHomeGetPackingBox">
                <h1>What are you waiting for? Get Bundle!</h1>
                <button>Placeholder for Create Trip</button>
            </div>
        </>
    );
};

export default Home;