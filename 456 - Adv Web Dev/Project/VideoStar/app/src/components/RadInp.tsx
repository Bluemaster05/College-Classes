export function RadInp(props: {change: Function,id: string, label: string, value: string, checked: boolean}){
    return <div>
        <input type="radio" onChange={props.change} name="dur" id={props.id} value={props.value} checked={props.checked}/>
        <label style={{paddingLeft: '2px', fontSize: '10.5pt'}} htmlFor={props.id}>{props.label}</label>
    </div>
}