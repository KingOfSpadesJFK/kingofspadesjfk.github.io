import * as React from 'react'
import './work_info_card.css'

const WorkInfoCard = ({name, description, repo, website, startDate, thumbnail, screenshots}) => {
    const [isOpen, setIsOpen] = React.useState(false); // State to track open/closed state

    const handleClick = () => {
        setIsOpen(!isOpen); // Toggle open state on click
    };

    let websiteElem = (<p><a href={website}> Website </a></p>);
    let repoElem = (<p><a href={repo}> Repository </a></p>);
    return (
      <div 
        className={`info-card ${isOpen ? 'open' : ''}`}>
        <button onClick={handleClick}>{name}</button>
        <div className={`info-details ${isOpen ? 'open' : ''}`}>
          <p>{description}</p>
          {website && websiteElem}
          {repo && repoElem}
        </div>
      </div>
    )
}

export default WorkInfoCard