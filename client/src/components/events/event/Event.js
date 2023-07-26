import React, {useState, useEffect} from "react";
import {useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Event.css";
import eventServices from "../../../services/event-services";
import isLoggedIn from "../../../utils/auth";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Event = ({event, isAdmin, isLiked, isLoggedIn}) => {
    const [likeState, setLikeState] = useState(isLiked);
    const history = useHistory();

    const handleEdit = (e) => {
        const id = e.currentTarget.id;
        history.push('/edit/' + id);
    }

    const handleDelete = (e) => {
        const id = e.currentTarget.id;
        eventServices.delete(id).then(() => {
            history.push('/');
        }).catch(err => console.log(err));
    }

    const hitLike = (e) => {
        const id = e.currentTarget.id;
        eventServices.like(id).then(() => {
            history.push('/');
            setLikeState(true);
        }).catch(err => console.log(err));
    }

    const hitDislike = (e) => {
        const id = e.currentTarget.id;
        eventServices.dislike(id).then(() => {
            history.push('/');
            setLikeState(false);
        }).catch(err => console.log(err));
    }

    const showDetails = (e) => {
        const id = e.currentTarget.id;
        eventServices.details(id).then(() => {
            history.push('/details/' + id);
        }).catch(err => console.log(err));
    }

    return (
        <div className="Event" key={event._id}>
            <Card className="event-container">
            {
                // isLoggedIn 
                    true?
                    <Card.Img variant="top" src={event.imageURL} alt="Event-Poster" className="details" onClick={showDetails} id={event._id}/> :
                    <Card.Img variant="top" src={event.imageURL} alt="Event-Poster" id={event._id}/>
            }
            <Card.Title><p className="name">{event.name}</p></Card.Title>
            <Card.Body>
                <Card.Text>
            <p className="description">{event.description}</p>
            { event.admin.firstName ?
                <div className="creator">
                    <span><strong>Creator: </strong></span>
                    {event.admin.firstName + ' ' + event.admin.lastName}
                </div> : null
            }
            {  event.club ? <div className="club">
                <span><strong>Club: </strong></span>
                {event.club}
            </div> : null}
            </Card.Text>
                {!isAdmin ?
                    <div>
                        {event.admin.firstName ?
                <div className="likes">
                {likeState ?
                    <i className="fas fa-heart red" id={event._id} onClick={hitDislike}></i> :
                    <i className="fas fa-heart" id={event._id} onClick={hitLike}></i>
                }
                <span> {event.likes.length + (event.likes.length === 1 ? " Like" : " Likes")}</span>
                </div> : null }
                    </div>
                :
                <div className="buttons-event">
                <Button className="button-edit" variant="secondary" id={event._id} onClick={handleEdit}>Edit</Button>
                <Button className="button-delete" variant="danger" id={event._id} onClick={handleDelete}>Delete</Button>
                </div>}
                </Card.Body>
                
                </Card>
        </div>
    )
}

export default Event;