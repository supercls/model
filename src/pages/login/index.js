import React from 'react'
import {register} from '@/utils/api'
import {Button} from 'antd'
import { connect } from "react-redux";
import { add } from "@/store/action"
const mapStateToProps = state => ({ datasp: state.reducer1 });
const mapDispatchToProps = { add };

function login({datasp,add,...props}){
    console.log(props);
    
    const login = () =>{
        register({
            roleGroup:'1',
        }).then(res =>{
           add()
           props.history.push('/Index')
            console.log(res);
        }).catch(e =>{
            console.log(e);
        })
    }
    return(
        <div>
            我是登录页面
            {datasp}
            <Button onClick={login}>点击登录</Button>
        </div>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(login)
