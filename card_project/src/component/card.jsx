import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {
  return (
    <div >
      <div className="card">

        <div>
                  <div className="top">
          <img src={props.job.brandLogo} alt="" />
          <button>save  <Bookmark size={12}/></button>
        </div>

        <div className="center">
          <h3>{props.job.companyName} <span>{props.job.datePosted}</span></h3>
          <h2>{props.job.position}</h2>

          <div className="post">
            <h4>{props.job.tag1}</h4>
            <h4>{props.job.tag2}</h4>
          </div>

        </div>
        </div>

        <div className="bottom">

          <div className="location">
            
              <h3>{props.job.salary}</h3>
              <p>{props.job.location}</p>
            
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    
    </div>
  )
}

export default card