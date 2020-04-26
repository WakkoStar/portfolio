import Head from 'next/head'

function Layout({ children }) {
    return (
        <div className="container">
        <Head>
            <title>Hugo del Pia | Portfolio </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
            {children}
        </div>
        )
  }
  
  export default Layout