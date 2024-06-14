// Step 1: Import React
import * as React from 'react'
import Layout from './component/layout'
import WavingText from './component/waving_text'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <div className='pt-28 relative flex flex-col justify-evenly'>
        <p className="text-fg-secondary text-left text-sm">the hidden corner of </p>
        <WavingText>Miguel Lima</WavingText>
        <p className="text-fg-primary text-right text-lg font-extrabold">a full-stack developer</p>
        {/* This is where I put something that links to my about page */}
      </div>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage