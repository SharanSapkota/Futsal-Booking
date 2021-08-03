import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Booking.css";
import dateFormat from 'dateformat'

import axios from "axios";

function Booking() {
  const getUserId = localStorage.getItem('user_id')
  console.log(getUserId)
  const [arenaData, setArenaData] = useState([]);
  const [getValue, setValue] = useState({
    ground_id: "",
    BookedDate:"02/02/2021",
    BookedTime: "",
    user_id: getUserId

  })
  if(getValue.BookedDate) {
    console.log('abc')
    const dateObj = new Date(getValue.BookedDate)
  
const computedDate = dateFormat(dateObj, 'mm/dd/yyyy');
console.log(computedDate)
    
// paddedShortDate    

  }

  useEffect( () => {
    const fetchAllData = async() => {
  await axios.get("http://localhost:8080/api/v1/public/findAll")
            .then((response) => {
           
              setArenaData(response.data);
            });
          }
          fetchAllData()
  },[] );
  console.log(arenaData);

  const [bookId,setBookId] = useState([]);

const postId = (id) => {
  console.log(id)
 axios.post("http://localhost:8080/api/v1/public/getbyFutsalid" , {"futsal_id":id})
        .then((resp) => {
          setBookId(resp.data)
        })

}
console.log(getValue)
const onChangeHandler2 = (e) => {
  const dateObj = new Date(e.target.value)
  const computedDate = dateFormat(dateObj, 'mm/dd/yyyy');
console.log(computedDate)

  setValue({...getValue, [e.target.name]:computedDate})
}
const onChangeHandler = (e) => {
  console.log(e.target.value)
  setValue({...getValue, [e.target.name]: e.target.value})
  postId(e.target.value)
}

const onTimeChangeHandler = (e) => {
  setValue({...getValue, [e.target.name]: e.target.value})

}

const onSubmit =async() => {
  await axios.post("http://localhost:8080/api/v1/public/book" ,{getValue} )
}

  return (
    <div className="book-form">
      <Container style={{ border: "1px solid black", marginTop: "20%" }}>
        <h1 style={{ color: "Black", marginTop: "20px" }}>Book Your Arena</h1>
        <hr />
        <Row className="mb-5">
          <Form.Group as={Col} controlId="formGridState">
            <h3>Select Arena</h3>
            <Form.Select name="ground_id" value={getValue.ground_id} onChange = {(e) => onChangeHandler(e)}>

              {arenaData.map((bookData) =>
                <option value={bookData.id}>{bookData.name}</option>
              )}
            </Form.Select>
            <h3>Select Ground</h3>
            <Form.Select>
              {bookId.map((groundId, key)=>
                  <option value={groundId.futsal_id}>{key+1}</option>
              )}
            </Form.Select>
            <h3>Select Date</h3>
            
            <input type="date" name="BookedDate" onChange={(e) => onChangeHandler2(e)} placeholder="Select Date" />
            {/* 
            
            <input type="date" name="BookedDate" onChange={(e) => onChangeHandler2(e)} placeholder="Select Date" />
         */}
         
 <label for="cars"><h3>Select Time</h3></label>

 <select name="BookedTime" onChange={(e) => onTimeChangeHandler(e)} value={getValue.BookedTime} class="form-select" aria-label="Default select example">
  <option selected>24 hrs time list</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="11">11</option>
  <option value="12">12</option>
  <option value="13">13</option>
  <option value="14">14</option>
  <option value="15">15</option>
  <option value="16">16</option>
  <option value="17">17</option>
  <option value="18">18</option>
  <option value="19">19</option>
  <option value="20">20</option>
  <option value="21">21</option>
  <option value="22">22</option>
  <option value="23">23</option>
  <option value="24">24</option>
</select>



          </Form.Group>

        </Row>

        <Button onClick = {() => onSubmit()} variant="dark" style={{ margin: "10%" }}>
          Book Now
        </Button>
      </Container>
    </div>
  );
}

export default Booking;
