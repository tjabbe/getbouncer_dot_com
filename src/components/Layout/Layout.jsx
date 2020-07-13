import React from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { theme, reset, root } from '~styles'
import Header from '~components/Header'
import Footer from '~components/Footer'

const globalStyle = css`
  ${reset}
  ${root}

  @font-face {
    font-family: 'Halyard Text';
    font-style: normal;
    font-weight: normal;
    src: url('/HalyardTextBook.woff2') format('woff2'), url('/HalyardTextBook.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Halyard Display';
    font-style: normal;
    font-weight: 500;
    src: url('/HalyardDisMed.woff2') format('woff2'), url('/HalyardDisMed.woff') format('woff');
    font-display: swap;
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Global styles={globalStyle} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
