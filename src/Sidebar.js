import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow.js';

function Sidebar({ user }) {
    return (

        <div className = "sidebar">
            <div className = "sidebar__top">
                <SidebarRow avatar ImageLink="https://scontent-maa2-2.xx.fbcdn.net/v/t1.30497-1/c94.0.320.320a/p320x320/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=dbb9e7&_nc_ohc=xJbPAeMXf4wAX8qQk04&_nc_ht=scontent-maa2-2.xx&oh=1cce9c5de9c5a219ebe87da0179d7633&oe=5F51E03D" 
                title={user?.displayName} />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png"
                    title = "COVID-19 information Centre"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
                    title = "Friends"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
                    title = "Groups"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
                    title = "Vidoes"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png"
                    title = "Ads"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/p1ZJABzCAAS.png"
                    title = "Blood donations"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/Doj4fJpfxHx.png"
                    title = "Business Suite"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/cT5nPnO8Wsc.png"
                    title = "Crisis Response"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png"
                    title = "Events"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/SWt1APlIN82.png"
                    title = "Films"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png"
                    title = "Friend Lists"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png"
                    title = "Fundraisers"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png"
                    title = "Games"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/DO-SN-shaZL.png"
                    title = "Jobs"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/Nl9CPY6q_n-.png"
                    title = "Live videos"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png"
                    title = "Memories"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png"
                    title = "Messenger"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png"
                    title = "Messenger Kids"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png"
                    title = "Most recent"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/NYOGcd-z-qs.png"
                    title = "Offers"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"
                    title = "Pages"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png"
                    title = "Recent ad activity"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"
                    title = "Saved"
                />
                <SidebarRow 
                    ImageLink = "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/bo0Zt72NIra.png"
                    title = "Weather"
                />
            </div> 
        </div>
        // <div className="sidebar">
        //     <SidebarRow avatar ImageLink="https://scontent-maa2-2.xx.fbcdn.net/v/t1.30497-1/c94.0.320.320a/p320x320/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=dbb9e7&_nc_ohc=xJbPAeMXf4wAX8qQk04&_nc_ht=scontent-maa2-2.xx&oh=1cce9c5de9c5a219ebe87da0179d7633&oe=5F51E03D" title={user?.displayName} />
        //     <SidebarRow selected ImageLink="https://www.flaticon.com/premium-icon/icons/svg/1674/1674711.svg" title="News Feed" />
        //     <SidebarRow ImageLink="https://image.flaticon.com/icons/svg/733/733548.svg" title="Messenger" />
        //     <SidebarRow ImageLink="https://image.flaticon.com/icons/svg/2991/2991552.svg" title="Watch" />
        //     <h3>Explore</h3>
        //     <SidebarRow ImageLink="https://image.flaticon.com/icons/svg/889/889102.svg" title="Welcome" />
        //     <SidebarRow ImageLink="https://image.flaticon.com/icons/svg/2750/2750767.svg" title="COVID-19 Information" />
        //     <SidebarRow ImageLink="https://www.flaticon.com/premium-icon/icons/svg/277/277658.svg" title="Pages" />
        //     <SidebarRow ImageLink="https://image.flaticon.com/icons/svg/3076/3076753.svg" title="Events" />
        //     <SidebarRow ImageLink="https://image.flaticon.com/icons/svg/681/681392.svg" title="Groups" />
        // </div>
    )
}

export default Sidebar
