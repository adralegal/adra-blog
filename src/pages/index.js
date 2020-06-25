import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from "../components/navbar/navbar"
import Blog from "../components/blog/blog"
import BlogRow from "../components/blogs-row/blogs-row"
import Sidebar from "../components/sidebar/sidebar";
import "./index.css";

const blogs = [
  <Blog title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
]

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div>
      <Navbar />
      <div className="FlexRow">
        <Sidebar />
        <div style={{width: "100%"}}>
          <BlogRow header="Recently Added" content={blogs} />
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
