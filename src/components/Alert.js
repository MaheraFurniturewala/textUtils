import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        //cls --> cumulative layout shift
        <div style={{height:'50px'}}>
        {props.alert && <div>
            {/* && --> if props.alert==false(null) then the thing ahead will not be evaluated (JSX will be converted to JavaScript calls)*/}
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>
        </div>}
        </div>
    )
}
