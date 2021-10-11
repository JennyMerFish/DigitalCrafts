 
 const initialState = {
  data: {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
  datasets: [
    {
      label: "Graph",
      data: [16, 15, 17, 15, 13, 11, 9, 2, 6, 4],
      backgroundColor: [
        
        'rgba(54, 162, 235, 0.2)'
     
      ],
      borderColor: [
        
        'rgba(54, 162, 235, 1)'
       
      ],
      borderWidth: 1, 
    },
  ],
},

 options: {
  
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}}

const graphData = (state=initialState, action) => {
  switch(action.type){
    // case "GET_DATA":
    //   return{...state}
    default:
      return state

  }
}

export default graphData