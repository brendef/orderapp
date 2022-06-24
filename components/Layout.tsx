// Next JS
import Head from 'next/head'


const Layout = ({ 
    children,
    title=' Next JS App "Title" ',
    active = 'Page'
}:any) => {

    const useTitle = title + ' | ' + active

  return (
    <>
        <Head>
            <title>{useTitle}</title>
            <meta name='description' content=' A description of your app "Description" ' />
        </Head>
        <div className={``}>
            <header>Header</header>
            <main className={``}>
                { children }
            </main>
            <footer>Footer</footer>
        </div>
        
    </>
  )
}

export default Layout