import React, { useState,useEffect,useMemo,useContext} from 'react'
import MiddleContest from '@/pages/Home/contest'  //中间件  多层级传值

const ModelHeader = ({name,count,toFun}) =>{
    const [list,setList] = useState([])
    useEffect(() =>{
        setList(['在线教育','我的课程','个人中心'])
    },[])
    function acs(name){
        return name
    }
    const counts = useContext(MiddleContest) 
    const actionName = useMemo(() => acs(name),[name])
    const Todata = () =>{   
        toFun('子组件传递的值')
    }
    return(
        <header className="Eduwrapper">
            <ul>
                {counts}
                父组件传递次数{count}
                {actionName}
                <button onClick={Todata}>子传递父组件值</button>
                {
                    list.map((item,index) =>{
                        return <li key={index+Math.random}>{item}</li>
                    })
                }
            </ul>
        </header>
    )
}
export default ModelHeader