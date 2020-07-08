import React from "react"
import {graphql} from 'gatsby'
import SiteScaffold from "../components/SiteScaffold"

export default function BlogPost({data}) {
  return (
    <div>
        <SiteScaffold>
          <h1>Blog Post</h1>
          <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>

        </SiteScaffold>
    </div>
  )
}
export const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
        }
    }
`
