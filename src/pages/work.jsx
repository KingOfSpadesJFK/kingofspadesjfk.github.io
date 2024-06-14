import * as React from 'react'
import WorkInfoCard from './component/work_info_card'
import Layout from './component/layout';

const ExplorePage = () => {
    return (
        <Layout>
          <div>
            <h1>Work</h1>
            <p>A variety of projects I've worked on.</p>
            <WorkInfoCard 
              name='Worth Diving For' 
              description='A slow-paced underwater platformer. Submitted to Pixel Game Jam 2024' 
              website='https://kasseroleofsaracha.itch.io/worth-diving-for'
              repo='https://github.com/KingOfSpadesJFK/gabagool'
            />
            <WorkInfoCard 
              name='Learnix' 
              description='An AI chatbot trained on academic papers for a college level'
              repo='https://github.com/EvilDragovka/Capstone_Project_One'
            />
            <WorkInfoCard 
              name='CommerceInsight' 
              description='A financial app where you can manage stocks.' 
              repo='https://github.com/WyattTheWorldly/CS480-Final-Project'
            />
          </div>
        </Layout>
    )
}

export default ExplorePage