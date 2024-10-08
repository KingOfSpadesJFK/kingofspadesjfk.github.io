import * as React from 'react'
import WorkInfoCard from './component/work_info_card'
import Layout from './component/layout';

const ExplorePage = () => {
    return (
        <Layout>
          <div>
            <h1>Work</h1>
            <p>A variety of stuff I've worked on:</p>
            <WorkInfoCard 
              name='BHLEG' 
              description='A puzzle-platformer about shining light as a gameplay mechanic. Submitted to the Pirate Software Game Jam 15' 
              website='https://kasseroleofsaracha.itch.io/bhleg'
            />
            <WorkInfoCard 
              name='Worth Diving For' 
              description='A slow-paced underwater platformer. Submitted to Pixel Game Jam 2024' 
              website='https://kasseroleofsaracha.itch.io/worth-diving-for'
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

export const Head = () => <title>Work</title>

export default ExplorePage