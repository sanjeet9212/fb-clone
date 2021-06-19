import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className = "storyreel">
            <Story 
                image = "https://picsum.photos/seed/picsum/200/300"
                profileSrc = "https://avatars2.githubusercontent.com/u/56448109?s=60&v=4"
                title = "Stories"
            />
            <Story 
                image = "https://picsum.photos/200/300?grayscale"
                profileSrc = "https://avatars2.githubusercontent.com/u/56448109?s=60&v=4"
                title = "Stories"
            />
            <Story 
                image = "https://picsum.photos/id/237/200/300"
                profileSrc = "https://avatars2.githubusercontent.com/u/56448109?s=60&v=4"
                title = "Stories"
            />
            <Story 
                image = "https://picsum.photos/200/300"
                profileSrc = "https://avatars2.githubusercontent.com/u/56448109?s=60&v=4"
                title = "Stories"
            />
        </div>
    )
}

export default StoryReel
