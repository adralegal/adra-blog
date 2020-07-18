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
import Layout from "../components/layout"

const blogs = [
  <Blog key={0} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog key={1} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog key={2} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog key={3} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog key={4} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog key={5} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog key={6} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog key={7} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog key={8} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
]



//TODO use navbar and sidebar as component of layout
const IndexPage = () => (
  <>
    {/* <SEO title="Home" />
    <div>
      <Navbar />
      <div className="FlexRow">
        <Sidebar />
        <div style={{width: "100%"}}>

        </div>
      </div>
    </div> */}
    <Layout>
      <SEO title="Home"/>
      <BlogRow header="Recently Added" content={blogs} />
    </Layout>
  </>
)

export default IndexPage
