import React, { useEffect,useState, Fragment } from 'react'
import style from './Input.module.css'
import PropTypes from 'prop-types';
import {Form,Input} from 'antd'
import {
    CloseOutlined
  } from '@ant-design/icons';

  
class Forms extends React.Component{
    constructor(){

    }
    static Item = Item
    render(){
        return(
            <div>
                777
            </div>
        )
    }
}


function CreateInput({type='text',defaultValue ='',maxLength,prefix,size,allowClear,children,...reset}){
    const [InputValue,Setvalue] = useState(defaultValue)
    const [isFocus,Setfocus] = useState(false)
    function onChange(e){  //输入事件监听
        Setvalue(e.target.value.slice(0,maxLength))
        !e.target.value ? Setfocus(false) :Setfocus(true)
    }
    function onFocus(e){   //获取焦点
        
    }
    function removeValue(){  //清除数据
        Setvalue('')
        Setfocus(false)
    }
    return(
        <Fragment>
            <div className={style.Inputdiv+' '+style[size]||'middle'} >
                {
                    prefix && <span>{prefix}</span>
                }
                <input
                    {...reset}
                    type={type}
                    onFocus={(e) => onFocus(e)}
                    value={InputValue}
                    onChange={(e) => onChange(e)}
                />
                {/** 关闭按钮如果需要***/}
                {
                    allowClear && isFocus &&  <CloseOutlined  onClick={removeValue}/>
                }
            </div>
            {children}
        </Fragment>
    )
}

CreateInput.propTypes = {
    type: PropTypes.string,
    maxLength: PropTypes.string
};
function Item(){
    return(
        <div>
            999
        </div>
    )
}
CreateInput.Item = Item
export default CreateInput