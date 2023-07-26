import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from "react";
import './Home.css';
import Event from "../../events/event/Event";
import isAdmin from "../../../utils/isAdmin";
import isLiked from "../../../utils/isLiked";
import eventServices from "../../../services/event-services";
import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';
import slide1 from '../../../images/slide1.jpg';
import slide2 from '../../../images/slide1.jpg';
import slide3 from '../../../images/slide1.jpg';
const Home = ({ isLoggedIn }) => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      eventServices.get().then((ev) => {
        setEvents(ev);
      });
    } else {
      eventServices.get(3).then((ev) => {
        setEvents(ev);
      });
    }
  }, [isLoggedIn]);

  const renderEvents = () => {
    let filteredEvents = events;
    if (searchTerm) {
      filteredEvents = events.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) || event.club.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filteredEvents.map((event) => (
      <Event
        isAdmin={isAdmin(event)}
        isLiked={isLiked(event)}
        key={event._id}
        event={event}
        isLoggedIn={isLoggedIn}
      />
    ));
  };

  const handleSearch = () => {
    renderEvents();
  };


  return (
    <div className="Home">

            
    <Carousel className='car'>
      <Carousel.Item className='carItem'>
        <img
          className="d-block h-100 w-100 x-0"
          src={slide1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item className='carItem'>
        <img
          className="d-inline-block h-100 w-100 x-0"
          src={slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carItem'>
        <img
          className="d-block h-100 w-100 x-0"
          src={slide3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

      {isLoggedIn ? <h1>ALL EVENTS</h1> : <h1>LATEST EVENTS</h1>}
      <div></div>
        <input
        type="text"
        id="search-input"
        placeholder="Search events/clubs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button id="search-btn" onClick={handleSearch}>
        Search
      </button>
      {renderEvents()}
    </div>
  );
};

export default Home;