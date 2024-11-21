export function PlacementShip( props: { length: number}){
    let tiles = []
    for (let i = 0; i < props.length; i++)
        tiles.push(<div style={{ width: '25px', height: '25px', backgroundColor: "#f9d849", borderRadius: '100%', margin: '7px'}}></div>)
    return <div
    style={{
        border: '2px solid red',
        backgroundColor: 'white',
        display: 'flex',
        width: 'fit-content'
        
    }}>
        {tiles}
    </div>
}