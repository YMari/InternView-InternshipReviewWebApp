import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../lib/ui/theme';
import NavBar from '../lib/ui/components/appbar';
import { container, UI_TYPES } from '../lib/ui/client_container';
import { IRequestService } from '../lib/ui/interfaces';
import { UserProvider } from '../lib/ui/contexts/providers'
import  useSWR from 'swr'
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Router from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function MyApp(props) {

  const { Component, pageProps } = props;

  const { data } = useSWR('/api/account/user', async ()=>{
    const ser = container.get<IRequestService>(UI_TYPES.IRequestService)
    const result =  await ser.loggedIn()
    console.log(result)
    return result.data
  })

  return (
    <>
      <Head>
        <title>InternView</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <UserProvider user={data} >
          <CssBaseline />
          <NavBar/>
          <Component {...pageProps} />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

