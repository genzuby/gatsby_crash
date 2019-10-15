import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => {
  return (
    <Layout>
      <SEO title="About Services" />
      <h1>About Services</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eius
        nesciunt reiciendis iure velit autem quas omnis labore alias neque
        laborum tenetur exercitationem ipsam delectus quibusdam unde, aliquid
        quod sit.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ServicesPage
