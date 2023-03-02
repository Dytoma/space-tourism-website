import '@/styles/globals.css';

import Layout from '../components/Layout';

export default function App({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  )
}
