import funnel from "../assets/funnel.svg"

export function SortToggle(props: {func: Function}) {
    return <>
        <div
            style={{
                display: 'flex',
                justifyContent: 'right',
                paddingRight: '40px'

            }}>
            <h1
                style={{
                    color: 'white',
                    fontWeight: '400',
                    margin: '0',
                    padding: '5px',
                    paddingTop: ' 25px',
                    fontSize: '20pt'
                }}
            >Filter and Sort</h1>
            <img src={funnel} alt=""  style={{
                marginTop: '23px'
            }}/>
        </div>
    </>
}