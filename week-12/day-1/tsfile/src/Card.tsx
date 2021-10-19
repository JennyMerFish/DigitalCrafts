import React, {FC} from 'react'

interface Dataprops {
    [index: number]: {name: string}
}

const Card: FC<Dataprops> = (props) => {
    return (
        <div>
          {props}
        </div>
    )
}

export default Card
