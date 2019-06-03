import React from 'react'
import {Switch, Route} from 'react-router-dom'

// User Page Components
import Home from './Components/User/Home/HomePage'
import Questionnaire from './Components/User/Questionnaire/Questionnaire'
import Rejection from './Components/User/Rejection/Rejection'
import LeadCaptureForm from './Components/User/LeadCaptureForm/LeadCaptureForm'
import UserCalendarMonth from './Components/User/UserCalendar/UserCalendarMonth'
import Confirmation from './Components/User/Confirmation/Confirmation'

// Admin Page Components
import SignIn from './Components/Admin/AdminAccount/SignIn'
import Registration from './Components/Admin/AdminAccount/AdminRegistration'
import EventDisplay from './Components/Admin/AdminCalendar/EventDisplay'
import CreateEvent from './Components/Admin/AdminCalendar/CreateEvent'

export default (
    <Switch>
        {/* User Side */}
        <Route exact path='/' component={Home} />
        <Route path='/questionnaire' component={Questionnaire} />
        <Route path='/sorry' component={Rejection} />
        <Route path='/details' component={LeadCaptureForm} />
        <Route path='/schedule' component={UserCalendarMonth} />
        <Route path='/confirmation' component={Confirmation} />
        {/* Admin Side */}
        <Route path='/login' component={SignIn} />
        <Route path='/register' component={Registration} />
        <Route path='/calendar' component={EventDisplay} />
        <Route path='/new-event' component={CreateEvent} />
    </Switch>
)