import * as React from 'react'
import Layout from './component/layout'
import { nametag, nametagWhitespace } from '../styles/about.module.css'

const AboutPage = () => {
  // TODO: Format this in Markdown instead
    return (
      <Layout>
        <div>
          <p>All right, let's do this one last time. My name is</p>
          <div className={nametag}>
            <h2 className='text-3xl font-bold'>HELLO!</h2>
            <h3 className='text-lg'>MY NAME IS</h3>
            <div className={nametagWhitespace}>
              <h1 className='my-0 text-txdark text-6xl font-black select-text'>Miguel Lima</h1>
            </div>
          </div>
          <p>and for the past few years, I've been a software developer. 
            I've learned many languages (Java, the C's, Python), designed front-ends, developed back-ends, programmed real-time simulations, managed databases, the whole nine yards...
          </p>
        </div>
      </Layout>
    )
}

export default AboutPage