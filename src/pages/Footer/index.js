import React, { memo } from 'react';
import {renderRoutes} from 'react-router-config';
import { Route, Redirect, Switch } from 'react-router-dom'
export default memo(function Footer(props){
    console.log(props)
    return(
        <div>
            我是页脚成员
            {renderRoutes(props.routes, { someProp: "these extra props are optional" })}
        </div>
    )
})