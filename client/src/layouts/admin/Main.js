import React from 'react'
import '../../assets/css/styles.css'
import '../../assets/js/scripts'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import routes from '../../routes/routes'
import { Switch, Route, Redirect } from 'react-router'

function Main() {
  return (
    <div className="sb-nav-fixed">

      <Navbar />

      <div id="layoutSidenav">
        <div id="layoutSidebav_nav">
          <Sidebar/>
        </div>

        <div id="layoutSidenav_content">
          <main>
            <Switch>
              {
                routes.map((route, index) => {
                  return (
                    route.component && (
                      <Route key={index} path={route.path} route={route.exact} name={route.name} render={
                        (props) => (
                          <route.component {...props} />
                        )
                      } />
                    )
                  )
                })
              }
              <Redirect from="/admin" to="/admin/dashboard"/>
            </Switch>
          </main>
          <Footer/>
        </div>
      </div>

    </div>
  )
}

export default Main;
