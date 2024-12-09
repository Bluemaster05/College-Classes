
export function Intermediate(props: { setStartTurn: React.Dispatch<React.SetStateAction<boolean>>}) {
    return <section>
        <button
        onClick={()=>{
            props.setStartTurn(true)
        }}
        style={{
            fontSize: '10pt',
            backgroundColor: '#2b2a33',
            border: '1px solid #504f5a',
            borderRadius: '4px',
            padding: '2px'
        }}
        >Start Turn</button>
    </section>
}