import React from 'react'
import HomepageCard from './HomepageCard'
import { homepageLinksData } from './HomepageLinksData'
export default function Homepage() {
    return (
        <div className="homepage">
            <img src="https://images.unsplash.com/photo-1549448046-b89e7214060d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            {homepageLinksData?.map((link) => (<HomepageCard link={link} />))}
        </div>
    )
}
