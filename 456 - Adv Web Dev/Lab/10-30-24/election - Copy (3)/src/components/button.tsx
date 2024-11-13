export function Button(props: {funcCall: () => void , name: string, style?: React.CSSProperties }) {
    return <>
    <button
    style={{
        ...props.style,
        backgroundColor: "#2b2a32",
        borderRadius: "5px",
        border: "1px solid #6f6f76",
        padding: "3px"
    }}
     onClick={props.funcCall}>{props.name}</button>
    </>
}