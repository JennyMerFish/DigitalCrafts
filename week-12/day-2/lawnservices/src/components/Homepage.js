import React from 'react'
import HomepageCard from './HomepageCard'
import { homepageLinksData } from './HomepageLinksData'
export default function Homepage() {
    return (
        <div className="homepage">
            {homepageLinksData?.map((link) => (<HomepageCard link={link} />))}
        </div>
    )
}
