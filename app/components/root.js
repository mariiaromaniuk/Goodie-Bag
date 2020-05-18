import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './NavBar'
import AllCandies from './AllCandies'
import Home from './Home'
import { connect } from "react-redux";
import { fetchGoodiesFromServer } from '../reducers/index'
// Needed if you have controlling state and if you see your router here
import { withRouter } from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/candies" component={AllCandies} />
          {/* <Route component={Error} /> */}
        </Switch>
      </main>
    </div>
  )
}
export default Root
