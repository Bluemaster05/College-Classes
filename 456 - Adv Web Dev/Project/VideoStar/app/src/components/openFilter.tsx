import { FiltTitle } from "./FiltTitle";
import { RadInp } from "./RadInp";

export function OpenFilter() {
    return <section
        style={{
            backgroundColor: '#728c83',
            display: 'flex',
            maxWidth: '600px',
            justifyContent: 'space-around',
            padding: '10px'

        }}
    >
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            maxWidth: '120px'
        }}>
            <FiltTitle title="Title"></FiltTitle>
            <input type="text" name="" id="" style={{ borderRadius: '5px', border: '1px solid black' }} />
            <FiltTitle title="Sort"></FiltTitle>
            <select name="" id="" style={{ border: '1px solid black', borderRadius: '5px', width: '100%'}}>
                <option value="">h1</option>
                <option value="">imh geter</option>
                <option value="">egerg</option>
            </select>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <FiltTitle title="Duration"></FiltTitle>
            <div style={{
                display: 'flex',
            }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <RadInp id="0" label="Over 1 min" ></RadInp>
                    <RadInp id="1" label="Less than 1 min"></RadInp>
                    <RadInp id="2" label="Less than 30 seconds"></RadInp>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <RadInp id="3" label="Less than 15 seconds"></RadInp>
                    <RadInp id="4" label="None"></RadInp>
                </div>
            </div>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <FiltTitle title="Cost"></FiltTitle>
        </div>
    </section>
}