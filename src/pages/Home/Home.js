import React , {useEffect} from 'react'
import style from './Home.module.css'
import ModelHeader from '@/pages/Header/Header'
const ModelHome = () =>{
    useEffect(() =>{
        console.log(8);
        
    })
    return(
        <div className={style.wrapper}>
            <div className={style.Eduwrapper}>
                <div className={style.ignoresss}>1</div>
                <span className={style.sps}>2</span>
                <ModelHeader></ModelHeader>
            </div>
            <div className={style.ppp}>
                <span className={style.sps}>2222</span>
            </div>
            
        </div>
        
    )
}
export default ModelHome