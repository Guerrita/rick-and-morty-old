import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';

const App = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>

      </Switch>
    </Layout>
  </BrowserRouter>
  )
}

export default App