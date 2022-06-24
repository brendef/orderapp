// Next JS
import Head from 'next/head'


const Layout = ({ 
    children,
    title=' Next JS App "Title" ',
    active = ''
}:any) => {
  return (
    <>
        <Head>
            <title>{active} | {title}</title>
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