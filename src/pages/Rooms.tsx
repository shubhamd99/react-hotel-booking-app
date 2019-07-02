import React from 'react';
import Cover from '../components/Cover';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../containers/RoomsContainer';

const Rooms: React.FC = () => {
    return (
        <React.Fragment>
        <Cover coverClass="roomsHero">
            <Banner 
            title="our rooms"
            >
            <Link to="/" className="btn-primary">return home</Link>
            </Banner>
        </Cover>
        <RoomsContainer />
        </React.Fragment>
    )
}

export default Rooms;