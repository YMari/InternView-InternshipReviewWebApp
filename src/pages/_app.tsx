import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../lib/ui/theme';
import NavBar from '../lib/ui/components/appbar';
import { container, UI_TYPES } from '../lib/ui/client_container';
import { IRequestService } from '../lib/ui/interfaces';
import { NextPageContext } from 'next';
import { UserProvider } from '../lib/ui/contexts/providers'




export default function MyApp(props) {
  const { Component, pageProps, user } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    console.log(props.result)

  }, []);

  return (
    <>
      <Head>
        <title>InternView</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <UserProvider user={user} >
          <CssBaseline />
          <NavBar/>
          <Component {...pageProps} />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}


MyApp.getInitialProps = async (ctx: NextPageContext) => {

  const ser = container.get<IRequestService>(UI_TYPES.IRequestService)

  const result = await ser.loggedIn()

  console.log(result)

  return  {
    user: result.data
  }

}