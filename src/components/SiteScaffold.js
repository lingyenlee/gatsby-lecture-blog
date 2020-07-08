import React from "react"
import { Link } from "gatsby"

export default function SiteScaffold({children}) {
  return (
    <div>
       <li><Link to="/">Home</Link> </li>
       <li><Link to="/about">About</Link> </li>
       <li><Link to="/contact">Contact</Link> </li>
       <li><Link to="/projects">Projects</Link> </li>

       <hr />
       {children}
    </div>
  )
}