import React , {useEffect,useState} from 'react'
import style from './Home.module.css'
import ModelHeader from '@/pages/Header/Header'
import MiddleContest from './contest'
import Form  from './form'
import store from '@/store/store'
import {Route,Link} from 'react-router-dom'
import News from '@/pages/News/index'
import Footer from '@/pages/Footer/index'

const ModelHome = () =>{
    const [p1,setp1] = useState('hello')
    const [p2,setp2] = useState('pos')
    const [count,setCount] = useState(0)
    const [data,setData] = useState({
        value1:'666'
    })
    const [isLogin,setisLogin] = useState('login')
    useEffect(() =>{

    },[])
    const click1 = () =>{
        setp1('你好')
        store.dispatch({type: 'add'})   
    }
    const click2 = () =>{
        setp2('llk')
    }
    const toFun = (value) =>{
        console.log(value);
        setp2(value)
    }
    const cha = (data) =>{   //回调函数
        setData(data)
    }
    return(
        <div className={style.wrapper}>
             {store.getState().reducer1}
             <MiddleContest.Provider value={isLogin}>
                    <ul style={{margin:'50px'}}>
                        <li >
                            <Link to="/">News</Link>
                            <Link to="/footer">Footer</Link>
                        </li>
                    </ul>
                    <Route path="/" exact component={News}></Route>
                    <Route path="/footer" component={Footer}></Route>
                 {/*******
                  * 
                  * 
                * ******/}
                <div className={style.Eduwrapper}  >
                    <div onClick={click2} className={style.ignoresss}>1</div>
                    <span className={style.sps}>{count}</span>
                    <button onClick={() =>(setCount(count+1),setisLogin('register'))}>点击</button>
                    <ModelHeader name={p1} count={count} toFun={toFun}>
                    </ModelHeader>
                </div>
                {p1}
                {p2}
                <div className={style.ppp}>
                    <span onClick={click1} className={style.sps}>2222</span>
                </div>
                <div style={{marginTop:'30px'}}>
                    <Form data={data} cha={cha}></Form>    
                </div>
            </MiddleContest.Provider>
        </div>
        
    )
}

export default ModelHome