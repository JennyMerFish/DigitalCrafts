import {useState} from 'react'


 
 function DB(props) {
     const {allTheForms} = props
     console.log(allTheForms)
     return (
         <div className ="displaybox">
             <h2>{allTheForms[0].firstName} {allTheForms[0].lastName}</h2>
             <h2>{allTheForms[0].DOB}</h2>
             <h2>{allTheForms[0].address} {allTheForms[0].city} {allTheForms[0].state} {allTheForms[0].zipcode}</h2>
             <h2>{allTheForms[0].userName} {allTheForms[0].email}</h2>

             

         </div>
     )
 }

 export default DB;