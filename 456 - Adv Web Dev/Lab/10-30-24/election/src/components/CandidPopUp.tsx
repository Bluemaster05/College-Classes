import { Button } from "./button"

export function CandidPopUp(props: { name: string, description: string, img: string }) {
    const styles = {
        sectionStyle: {
            
        }
    }
    return <>
        <section
            style={{
                backgroundColor: 'black',
                border: '2px solid white',
                borderRadius: '15px',
                width: '50rem'
            }}>
            <div style={{
                display: 'flex',
                justifyContent: 'right',
                padding: '15px'
            }}>
                <Button name='close' funcCall={() => {}}></Button>
            </div>
            <div
            style={{
                display: 'flex'
            }}>
                <div
                style={{
                    width: '25%',
                    height: '70%',
                    backgroundColor: 'green',
                    backgroundImage: `url(${props.img})`,
                    backgroundPosition: 'fit'

                }}></div>
                <div style={{
                    width: '70%'
                }}>
                    <h1 style={{
                        padding: '0',
                        margin: '0'
                    }}>{props.name}</h1>
                    <p style={{
                        padding: '0',
                        margin: '0'
                    }}>{props.description}</p>
                </div>
            </div>
        </section>
    </>
}