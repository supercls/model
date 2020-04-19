import React, {useEffect,useState } from 'react'

const Form = ({data,cha}) =>{
    const [obj,setobj] = useState({})
    function getData(){
        console.log(obj);
    }
    useEffect(() =>{
        setobj(data)
    },[data])
    const getChange = (e,type) =>{
        setobj({
            ...obj,
            [type]:e.target.value
        })
        cha({
            ...obj,
            [type]:e.target.value
        })
    }
    return(
        <div className="form">
            <ul>
                <li>
                    <input type="text" value={obj.value1 ||''} onChange={(e) =>getChange(e,'value1') }/>
                </li>
                <li>
                    <input type="text" value={obj.value2 ||''} onChange={(e) =>getChange(e,'value2') }/>
                </li>
                <li>
                    <select name="os" id="" value={obj.value3 ||''} onChange={(e) =>getChange(e,'value3') }>
                        <option value="1">选项1</option>
                        <option value="2">选项2</option>
                        <option value="3">选项3</option>
                    </select>
                </li>
            </ul>
            <button onClick={getData}>点击</button>
        </div>
    )
}
export default Form