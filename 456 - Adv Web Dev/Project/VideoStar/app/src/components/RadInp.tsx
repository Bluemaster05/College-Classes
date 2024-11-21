export function RadInp(props: {id: string, label: string, value: string}){
    return <div>
        <input type="radio" name="dur" id={props.id} value={props.value}/>
        <label style={{paddingLeft: '2px', fontSize: '10.5pt'}} htmlFor={props.id}>{props.label}</label>
    </div>
}