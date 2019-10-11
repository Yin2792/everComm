import React from 'react'
import {Switch,Route,withRouter,Redirect} from 'react-router-dom'
import login from './Login/login';
import ALLPlant from './allplant/allplant'
import RealtimeChiller from './chiller-realtime/realtimechiller'

const Router = () => {
    return (
        <div>
            <Switch>
                <Route path='/login' component={login}></Route>
                <Route path='/plant-select' component={ALLPlant}></Route>
                <Route path='/dashboard' component={login}></Route> 
                <Route path='/chiller-realtime' component={RealtimeChiller}></Route>
                <Redirect to='/login'/>
            </Switch>
        </div>
    )
}

export default withRouter(Router);
