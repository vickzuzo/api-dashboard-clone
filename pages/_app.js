import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header currentUser={""} />
      <Sidebar>
        <Component {...pageProps}/>
      </Sidebar>
    </>
  )
}
