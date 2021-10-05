import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
          <p>This is a single page task tracker where you and your team can organize and prioritize every 
              single task or item that needs to get done. 
              </p>  
          <Link className='link' to="/">Go Back</Link>
        </div>
    )
}

export default About
