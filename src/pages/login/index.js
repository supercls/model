import React from 'react'
import {register} from '@/utils/api'
import {Button} from 'antd'
import { connect } from "react-redux";
import { add ,asyncAdd } from "@/store/action"
import CreateInput from '@/pages/Form/create'
const mapStateToProps = state => ({ datasp: state.reducer1 });
const mapDispatchToProps = { add ,asyncAdd};

function login({datasp,add,asyncAdd,...props}){
    console.log(props);
    const login = () =>{
        register({
            roleGroup:'1',
        }).then(res =>{
           add()
           props.history.push('/Index')
            console.log(res);
        }).catch(e =>{
            asyncAdd()
            console.log(e);
        })
    }
    return(
        <div>
            我是登录页面
            <div style={{margin:'50px',width:'300px'}}>
                <CreateInput
                    type="text"
                    defaultValue="666"
                    maxLength="6"
                    prefix="$"
                    allowClear={true}
                    size="middle"
                    placeholder="请输入"
                >
                    <CreateInput.TextArea></CreateInput.TextArea>
                </CreateInput>
               
            </div>
            {datasp}
            <Button onClick={login}>点击登录</Button>
        </div>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(login)
