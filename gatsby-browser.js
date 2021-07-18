import { wrapRootElement as wrap } from './wrap-root-element'
import Layout from './src/components/Layout'

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    <Layout>{element}</Layout>
  </>
)
