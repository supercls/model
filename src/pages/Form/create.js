import React, { useEffect,useState, Fragment } from 'react'

function CreateInput({type='text',defaultValue ='',maxLength,prefix,...reset}){
    const [InputValue,Setvalue] = useState(defaultValue)
    function onChange(e){
        Setvalue(e.target.value.slice(0,maxLength))
    }
    return(
        <Fragment>
            <div>
                {
                    prefix && <span>{prefix}</span>
                }
                <input
                    {...reset}
                    type={type}
                    value={InputValue}
                    onChange={(e) => onChange(e)}
                />
            </div>
            
        </Fragment>
    )
}
export default CreateInput