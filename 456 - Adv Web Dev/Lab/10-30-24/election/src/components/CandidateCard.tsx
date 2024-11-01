export function CandidateCard(props: {CanName: string, party: string, canId: number, photo: string}){
    return <>
    <div style={{
        backgroundColor: "#3e3e3e",
        width: '200px',
        height: '260px',
        borderRadius: '10px',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px'
    }}>
        <div
        style={{
            width: '190px',
            height: '25%', 
            backgroundColor: '#2d2d2d',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '7px'
        }}>
            <h1>{props.CanName}</h1>
            <p
            style={{
                padding: '0',
                margin: '0',
            }}>{props.party}</p>
        </div>
        <div style={{
            // backgroundColor: 'Green',
            backgroundImage: `url(${props.photo})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '65%',
            width: '95%',
            borderRadius: '10px'

        }}>
            {/* <img src={props.photo} alt="" /> */}
            <div style={{
                backgroundColor: 'red',
                border: '2px solid white',
                width: '35px',
                height: '35px',
                borderRadius: '100%',
                marginTop: '120px',
                marginLeft: '140px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>{props.canId}</div>
        </div>
    </div>
    </>
}