import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import GithubCorner from 'react-github-corner'

import Base from 'templates/Base'
import theme from 'styles/theme'
import createEmotionCache from 'utils/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <title>Boilerplate</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="description"
        content="A starter template to work with Next.js and MUI"
      />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Base>
        <Component {...pageProps} />
      </Base>
      <GithubCorner
        href="https://github.com/padsilva/nextjs-boilerplate"
        bannerColor="#fff"
        octoColor="#000"
        target="_blank"
        rel="noopener"
      />
    </ThemeProvider>
  </CacheProvider>
)

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired
}

export default App
