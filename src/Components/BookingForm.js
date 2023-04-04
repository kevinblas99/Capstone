import "../Styles/BookingPage.css";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm (props) {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [ocassion, setOcassion] = useState('Birthday');
    const [guests, setGuests] = useState('1');
    const [date, setDate] = useState('');

const [realTime, setRealTime] = useState(
    props.availableTimes.map((times) => <option> {times} </option>)
);
let navigate = useNavigate();

function handleDateChange(e) {
    setDate(e.target.value)


    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);
    setRealTime(props.availableTimes.map((times) => <option>{times}</option>)); }

    return (
        <body className="formhtml">
        <div className="container">
        <h1>Reserve Your Table</h1>
    <form className="bookingform">
    <div className="row">
    <div className="column">
   <label for="res-date">Choose date</label>
   <input type="date"
    name="book_date"
     id="book_date"
     value={date}
     required
     onChange={handleDateChange}
     />

   </div>
   </div>
   <div className="row">
   <div className="column">
   <label for="res-time">Choose available time</label>
   <select
   id="res-time"
  required
   >{realTime}
   </select>
   </div>
   </div>
   <div className="row">
   <div className="column">
   <label for="guests">Number of guests</label>
   <input 
    type="number"
    value={guests}
    onChange={(e) => setGuests(e.target.value)}
    placeholder="1" 
     min="1" max="16"
      id="guests" />
   </div>
   </div>
   <div className="row">
   <div className="column">
   <label for="occasion">Occasion</label>
   <select 
   id="occasion"
   value={ocassion}
   onChange={(e) => setOcassion(e.target.value)}       >
      <option>Birthday</option>
      <option>Anniversary</option>
      <option>Other</option>
   </select>
   </div>
   </div>
   <div className="row">
   <div className="column">
   <label for="fname">First name</label> 
    <input 
    type="text" 
    value={first}
    onChange={(e) => setFirst(e.target.value)}
    id="fname" 
    name="fname"
    placeholder="Your first name here"
    required/>
    </div>
    </div>
    <div className="row">
    <div className="column">
   <label for="fname">Last name</label> 
    <input 
    type="text" 
    value={last}
    onChange={(e) => setLast(e.target.value)}
    id="lname"
     name="lname"
     placeholder="Your last name here" 
     required />
    </div>
    </div>
    <div className="row">
    <div className="column">
    <label for="email">Email</label>
    <input 
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    id="email" 
    placeholder="Your email here" 
    name="email"
     required></input>
    </div>
    </div>
    <div className="row">
    <div className="column">
   <button 
   aria-label="On Click"
   type="submit" 
   className="submittable" 
   value="Make Your reservation"
  // onClick={() => {navigate("/confirmation")}} 
   
   > Reserve</button>
   </div>
   </div>
    </form>
    </div>
    </body>
    );
};
