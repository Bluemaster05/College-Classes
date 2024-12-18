import funnel from "../assets/funnel.svg"

export function SortToggle(props: { func: () => void }) {
    return <>
        <div className="filterToggle" onClick={props.func}
            style={{
                display: 'flex',
                justifyContent: 'right',
                paddingRight: '40px',
                paddingTop: '20px',
                width: 'fit-content'
            }}>
            <h1
                style={{
                    color: 'white',
                    fontWeight: '400',
                    margin: '0',
                    padding: '5px',
                    paddingTop: ' 25px',
                    fontSize: '20pt',
                    width: '200px'
                }}
            >Filter and Sort</h1>
            <img src={funnel} alt="" style={{
                marginTop: '23px'
            }} />
        </div>
    </>
}