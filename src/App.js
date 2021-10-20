import { Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { createBrowserHistory } from "history"
import 'antd/dist/antd.css'
import Login from './Pages/Login'
import HomeTemplate from './Templates/HomeTemplate'
import HomePage from './Pages/HomePage'
import UserInfo from './Pages/UserInfo'
import CharityDetail from './Pages/CharityDetail'
import ActivityDetail from './Pages/ActivityDetail'
import ReportPage from './Pages/ReportPage'
import VerifyAccount from './Pages/VerifyAccount'
import UpdateStatus from './Pages/UpdateStatus'
import VerifyDetail from './Pages/VerifyDetail'

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <HomeTemplate exact path="/home" component={HomePage} />
        <HomeTemplate exact path="/info" component={UserInfo} />
        <HomeTemplate exact path="/chatitydetail" component={CharityDetail} />
        <HomeTemplate exact path="/activitydetail" component={ActivityDetail} />
        <HomeTemplate exact path="/report" component={ReportPage} />
        <HomeTemplate exact path="/verify" component={VerifyAccount} />
        <HomeTemplate exact path="/update" component={UpdateStatus} />
        <HomeTemplate exact path="/verifydetail" component={VerifyDetail} />
      </Switch>
    </Router>
  )
}

export default App
