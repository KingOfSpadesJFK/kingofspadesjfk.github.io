import * as React from 'react'
import TopBar from './topbar'
import { container } from './layout.module.css'
import "../../styles/index.tw.css"

const Layout = ({children}) => {
    return (
      <div>
        <TopBar/>
        <main className={container}>
          {children}
        </main>
      </div>
    )
}

export default Layout