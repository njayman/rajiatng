import { Fragment } from 'react';
import '../styles/globals.scss';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : Fragment;
  return (
    <>
      <MessengerCustomerChat
        pageId="110716174131526"
        appId="3291538894291106"
      />
      <Layout>

        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
