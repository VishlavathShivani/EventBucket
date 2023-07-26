import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router';
import eventServices from '../../../services/event-services';
import "./RegisterEvent.css";
function RegisterEvent() {

    const {id} = useParams();
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [branch, setBranch] = useState('');
    const [year, setYear] = useState('');
    const [rollno, setRollno] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, phone, branch, year, rollno } )
        eventServices.register({registeredUsers: { name, email, phone, branch, year, rollno }, id})
        .then(() => history.push('/'))
        .catch(err => {
            console.log(err);
        })
        // userService.registerEvent({ name, email, phone, branch, year, rollno })
        // .then(() => history.push('/'))
        // .catch(err => {
        //     console.log(err);
        // })
    }

  return (
    <div>
        <p className="title-reg" class="text-center">Register Event</p>
          <form className="Register w-80" onSubmit={handleSubmit}>
              {/* <p className="title">Sign Up</p> */}
              <div className="input">
                  <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                  />
              </div>
              <div className="input">
                  <input
                      type="email"
                      name="email"
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                  />
              </div>
              <div className="input">
                  <input
                      type="number"
                      name="phone"
                      placeholder="Contact No."
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                  />
              </div>
              <div className="input">
                  <input
                      type="text"
                      name="Branch"
                      placeholder="Branch"
                      onChange={(e) => setBranch(e.target.value)}
                      value={branch}
                  />
              </div>
              <div className="input">
                <select name="" onChange={(e) => setYear(e.target.value)} value={year} >
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                </select>
                  {/* <input
                      type="text"
                      name="Year"
                      placeholder="Year"
                      onChange={(e) => setYear(e.target.value)}
                      value={year}
                  /> */}
              </div>
              <div className="input">
                  <input
                      type="text"
                      name="rollno"
                      placeholder="Student ID"
                      onChange={(e) => setRollno(e.target.value)}
                      value={rollno}
                  />
              </div>
              <button type="submit" className="btn">SIGN UP</button>
          </form>
    </div>
  )
}

export default RegisterEvent;