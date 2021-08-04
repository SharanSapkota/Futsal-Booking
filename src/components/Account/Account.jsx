import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Account() {
  useEffect(() => {
    const getData = async () => {
     const data = await axios.post('localhost:8080/api/v1/public/findbookbyuser', {"user_id": localStorage.getItem('user_id')})
      console.log(data)
    }
    getData()
  })
    return (
     <div>
         <div id="container">
        <div class="product-details">
          <h1
            style={{
              fontFamily: "Arvo",
              fontSize: "25px",
              textAlign: "left",
              color: "black",
            }}
          >
value          </h1>
          <p
            style={{
              fontFamily: "Arvo",
              fontSize: "14px",
              textAlign: "left",
              marginBottom: "15px",
            }}
          >
value          </p>

          <p
            style={{ fontFamily: "Arvo", fontSize: "14px", textAlign: "left" }}
            class="information"
          >
value          </p>
        </div>
        <div class="arena-image">
          <img
            src="https://www.myholidaynepal.com/blog/images/blogimage/Kathmandu-Futsal-20130717231003.jpg"
            alt="Omar Dsoky"
          />
        </div>
      </div>
            This is account
        </div>
    )
}

export default Account
