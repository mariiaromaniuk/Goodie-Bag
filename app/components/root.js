import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './NavBar'
import AllCandies from './AllCandies'
import Home from './Home'


const Root = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/candies" component={AllCandies} />
        </Switch>
      </main>
    </div>
  )
}
export default Root
