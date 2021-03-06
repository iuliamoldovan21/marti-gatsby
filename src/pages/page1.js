import React from 'react'

import Helmet from 'react-helmet'

import styles from './page1.module.css'

const Page1 = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Page1 - marti</title>
        <meta property="og:title" content="Page1 - marti" />
      </Helmet>
    </div>
  )
}

export default Page1
