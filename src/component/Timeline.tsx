import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BarIcon } from "./BarIcon";

export const Timeline = () =>{
   return(
   <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BarIcon />}
    >
    <h3 className="vertical-timeline-element-title">USA Powerlifting Raleighwood Rumble</h3>
    <h4 className="vertical-timeline-element-subtitle">10/8/22</h4>
    <p>
        Type of Event: LOCAL
        Sanction: NC-2022-08
        Location: Raleigh, NC
        Director: Joshua Noble
        Co-Director: Lindsay Whitson
    </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BarIcon />}
    >
    <h3 className="vertical-timeline-element-title">2022 USA Powerlifting Alamo City Rookie Rumble</h3>
    <h4 className="vertical-timeline-element-subtitle">10/8/22</h4>
    <p>
        Type of Event: LOCAL
        Sanction: TX-2022-27
        Location: San Antonio, TX
        Director: Wes Zunker
        Co-Director: Vy Tran
    </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BarIcon />}
    >
    <h3 className="vertical-timeline-element-title">USA Powerlifting Raleighwood Rumble</h3>
    <h4 className="vertical-timeline-element-subtitle">10/8/22</h4>
    <p>
        Type of Event: LOCAL
        Sanction: NC-2022-08
        Location: Raleigh, NC
        Director: Joshua Noble
        Co-Director: Lindsay Whitson
    </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BarIcon />}
    >
    <h3 className="vertical-timeline-element-title">2022 USA Powerlifting Alamo City Rookie Rumble</h3>
    <h4 className="vertical-timeline-element-subtitle">10/8/22</h4>
    <p>
        Type of Event: LOCAL
        Sanction: TX-2022-27
        Location: San Antonio, TX
        Director: Wes Zunker
        Co-Director: Vy Tran
    </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BarIcon />}
    >
    <h3 className="vertical-timeline-element-title">USA Powerlifting Raleighwood Rumble</h3>
    <h4 className="vertical-timeline-element-subtitle">10/8/22</h4>
    <p>
        Type of Event: LOCAL
        Sanction: NC-2022-08
        Location: Raleigh, NC
        Director: Joshua Noble
        Co-Director: Lindsay Whitson
    </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<BarIcon />}
    >
    <h3 className="vertical-timeline-element-title">2022 USA Powerlifting Alamo City Rookie Rumble</h3>
    <h4 className="vertical-timeline-element-subtitle">10/8/22</h4>
    <p>
        Type of Event: LOCAL
        Sanction: TX-2022-27
        Location: San Antonio, TX
        Director: Wes Zunker
        Co-Director: Vy Tran
    </p>
    </VerticalTimelineElement>
</VerticalTimeline>
)

}