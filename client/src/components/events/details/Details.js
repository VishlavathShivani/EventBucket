import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';
import "./Details.css";
import Contact from "../contact/Contact";
import {useParams, useHistory} from "react-router";
import eventServices from "../../../services/event-services";
// import Comment from '../../comments/comment';
// import useNode from '../../../hooks/useNode';
// import '../../../commentStyles.css'
import isAdmin from '../../../utils/isAdmin';
import isLiked from "../../../utils/isLiked";


const Details = () => {
    const [event, setEvent] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [likeStatus, setLikeStatus] = useState(false);
    const [admin, setIsAdmin] = useState(false);
    const {id} = useParams();
    const history = useHistory();


     useEffect(() => {
         eventServices.details(id).then(res => {
            setEvent(res);
            setIsAdmin(isAdmin(res));
            setLikeStatus(isLiked(res));
        }).catch(err => console.log(err));
    }, []);

    const handleEdit = (e) => {
        const id = e.currentTarget.id;
        history.push('/edit/' + id);
    }

    const handleDelete = (e) => {
        const id = e.currentTarget.id;
        eventServices.delete(id).then(() => {
            history.push('/');
        }).catch(err => console.log(err));
        history.push('/');
    }

    const hitLike = (e) => {
        const id = e.currentTarget.id;
        eventServices.like(id).then(() => {
            history.push('/details/' + id);
            setLikeStatus(true);
        }).catch(err => console.log(err));
    }

    const hitDislike = (e) => {
        const id = e.currentTarget.id;
        eventServices.dislike(id).then(() => {
            history.push('/details/' + id);
            setLikeStatus(false);
        }).catch(err => console.log(err));
    }

    const render = () => {
        return (
            <div className="Details">
                <img src={event.imageURL} alt="alt" id={event._id}/>
                <div className="question-answers">
                    <span className="question">What is the name of the event?</span>
                    <p className="name">{event.name}</p>
                    <span className="question">Where will the event be held?</span>
                    <p className="location">{event.location}</p>
                    <span className="question">When will the event be held?</span>
                    <p className="date">{event.date}</p>
                    <span className="question">What is the event about?</span>
                    <p className="description">{event.description}</p>
                    <span className="question">Club Name</span>
                    <p className="description">{event.club}</p>
                </div>
                <div className="buttons">
                    {admin ===false?
                        <div className="likes">
                            {likeStatus ?
                                <i className="fa fa-heart red" id={event._id} onClick={hitDislike}></i> :
                                <i className="fa fa-heart" id={event._id} onClick={hitLike}></i>
                            }
                        </div>
                        :
                        <div className="buttons">
                            <button className="links" id={event._id} onClick={handleEdit}>Edit</button>
                            <button className="links" id={event._id} onClick={handleDelete}>Delete</button>
                        </div>}
                </div>
                {/* <div>
                      <Comment 
      handleInsertNode={handleInsertNode}
      handleEditNode={handleEditNode}
      handleDeleteNode={handleDeleteNode}
      comment={commentsData}/></div> */}
            <div>{admin===true?
                (<div className="view">
                     
                    <button onClick={() => setIsOpen(!isOpen)} >View Attendees</button>
                    {/* table for viewing attendees */}
                       {/* <Table> && isOpen */}
                       <h2>Attendees</h2>
                       {isOpen && <Table> 
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone No.</th>
                                <th>Branch</th>
                                <th>Year</th>
                                <th>Roll No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                event?.registeredUsers.map((user) => {
                                    return (
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.branch}</td>
                                            <td>{user.year}</td>
                                            <td>{user.rollno}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>}
                    <h2>Send Email</h2>
                    <Contact/>
                </div>)
               : <div className="register-event">
                    <button className="links-event"><a className="link-event" href={"/registerEvent/" + event._id}>Register</a></button>
                </div>}
            </div>
            </div>
        )
    }

    return Object.keys(event).length  ? render() : <span>Loading...</span>
}

export default Details;