import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from "react-redux";

const mapStateToProps = state => ({ data: state.reducer1 });
function RouterView({routes,data}) {
    
        let newList = routes.filter(item => !item.redirect)
        return (
            <div className = "view">
                <Switch>
                    {
                        newList.map((item, index) => {
                            let Com = item.component 
                            return <Route key = { index } exact={item.exact} path = { item.path } render = { (pro)=> {
                                if(item.free || data!=0 ){  //是否需要登录以及是否有登录信息
                                    if(item.routes ) {
                                        return <Com { ...pro } routes = { item.routes.filter(item => !item.redirect) }/>
                                    } else {
                                        return <Com { ...pro }/>
                                    }
                                }
                                else{
                                    return <Redirect  to='/user'></Redirect>
                                }
                            }}/>
                        })
                    }
                    <Redirect exact from='/' to='/user'></Redirect>
                    <Redirect from='*' to='/404'></Redirect>
                </Switch>
            </div>
        )    
}
export default connect(mapStateToProps)(RouterView)