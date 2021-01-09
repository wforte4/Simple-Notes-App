import React, { useEffect } from 'react'
import App from 'next/app'
import Layout from '../components/layout'
import { Provider } from "react-redux";
import { createWrapper } from 'next-redux-wrapper'
import store from "../store/store";
import { useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router'
import { useState } from 'react';
import Theme from '../styles/theme';

function MyApp({ Component, pageProps, router}) {
  const [loading, setLoading] = useState(false)
  const {profile, auth} = useSelector(state => state.post)
  const [userProfile, setProfile] = useState(null)
  const [authorization, setAuthorization] = useState(null)
  const [themeColor, setTheme] = useState(userProfile ? userProfile.userTheme == 'Light' ? '#ffffff': Theme.colors.dark: '#ffffff')
  Router.events.on('routeChangeStart', () => setLoading(true))
  Router.events.on('routeChangeComplete', () => setLoading(false))
  Router.events.on('routeChangeError', ()=> setLoading(false))

  // Sync Profile with redux 
  
  //Sync Login
  useEffect(() => {
    if(profile && auth) {
      setProfile(profile)
      setAuthorization(auth)
      setTheme(userProfile ? userProfile.userTheme == 'Light' ? '#ffffff': Theme.colors.dark: '#ffffff')
    }
  }, [userProfile == null && profile != null])

  //Sync Logout
  useEffect(() => {
    if(profile == null && auth == null) {
      setProfile(null)
      setAuthorization(null)
      setTheme('#ffffff')
    }
  }, [userProfile != null && profile == null])
  console.log(userProfile)
  return (
    <Provider store={store}>
      <Layout profile={userProfile} themeColor={themeColor} setTheme={setTheme} router={router} auth={authorization}>
        <Component auth={authorization} user={userProfile} themeColor={themeColor} {...pageProps}></Component>
      </Layout>
    </Provider>
  )
}

const makestore = ()=> store;
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)