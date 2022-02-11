import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hola amigños !</h1>
    <p>Bienvenidos a mi sitio.</p>
    s<StaticImage
      src="../images/webTapiara.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Ir a la página 2</Link> <br />
      <Link to="/hola/">Regresar a hola</Link> <br />
      <Link to="/using-typescript/">Ir a "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Ir a "Using SSR"</Link> <br />
      <Link to="/using-dsg">Ir a "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
