import lawnmower from "../../assets/lawnmower.png"
import tree from "../../assets/tree.png"
import gardener from "../../assets/gardener.png"
import fence from "../../assets/fence.png"
import grass from "../../assets/grass.png"

const initialState = [
    
        {name: "Lawn Maintenance", image: lawnmower},
        {name: "Tree Trimming", image: tree},
        {name: "Garden Design and Planting", image: gardener},
        {name: "Fence Repair and Replacement", image: fence},
        {name: "Mulch and Sod Installation", image: grass}
      
    
    ]

    const servicesData = (state=initialState, action) => {
        switch(action.type){
            default:
                return state
        }
    }
    export default servicesData