
 import React from 'react'
 import Card from './Card'

 
 export const CardContainer = () => {
    const data = [
        {name: "Jose"},
        {name: "Britt"},
        {name: "Matt"},
        {name: "Dustin"},
        {name: "Justin"},
        {name: "Kayla"},
        {name: "Deanna"},
        {name: "Cameron"},
        {name: "Tim"},
        {name: "Ron"},
        {name: "Jamie"},
        {name: "Brande"},
        {name: "Jordan"},
        {name: "Xavier"},
     ]
     return (
         <div>
            <Card data={data}/>
             
         </div>
     )
 }
 