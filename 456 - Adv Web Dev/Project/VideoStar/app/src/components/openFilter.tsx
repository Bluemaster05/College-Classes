import { ChangeEvent, useState } from "react";
import { Filter } from "../types/filter.type";
import { FiltTitle } from "./FiltTitle";
import { RadInp } from "./RadInp";

export function OpenFilter(props: { sort: React.Dispatch<React.SetStateAction<Filter>>, settings: Filter }) {
    function handleChange( event: ChangeEvent<HTMLInputElement> ) {
        const { target } = event
        const { name, value, type, checked } = target

        if(type === "checkbox") {
            props.sort({
                ...props.settings,
                [name]: checked
            })
        } else {
            props.sort({
                ...props.settings,
                [name]: value
            })
        }
        
    }

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
            <input type="text" value={props.settings.title} name="title" onChange={handleChange} id="" style={{ borderRadius: '5px', border: '1px solid black' }} />
            <FiltTitle title="Sort"></FiltTitle>
            <select value={props.settings.sort} name="sort" onChange={handleChange} id="" style={{ border: '1px solid black', borderRadius: '5px', width: '100%' }}>
                <option value="all">Featured</option>
                <option value="a-z">A - Z</option>
                <option value="z-a">Z - A</option>
                <option value="g-l">Greatest - Least</option>
                <option value="l-g">Least - Greatest</option>
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
                    <RadInp id="0" change={handleChange} label="Over 1 min" value=">1" checked={props.settings.dur === '>1'} ></RadInp>
                    <RadInp id="1" change={handleChange} label="Less than 1 min" value="1>" checked={props.settings.dur === '1>'} ></RadInp>
                    <RadInp id="2" change={handleChange} label="Less than 30 seconds" value="30>" checked={props.settings.dur === '30>'} ></RadInp>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <RadInp id="3" change={handleChange} label="Less than 15 seconds" value="15>" checked={props.settings.dur === '15>'} ></RadInp>
                    <RadInp id="4" change={handleChange} label="None" value="none" checked={props.settings.dur === 'none'}></RadInp>
                </div>
            </div>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <FiltTitle title="Cost"></FiltTitle>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <label htmlFor="">Min:</label>
                    <input onChange={handleChange} type="number" value={props.settings.min} name="min" id="" style={{ maxWidth: '60px', border: '1px solid black', borderRadius: '5px' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <label htmlFor="">Max:</label>
                    <input onChange={handleChange} type="number" value={props.settings.max} name="max" id="" style={{ maxWidth: '60px', border: '1px solid black', borderRadius: '5px' }} />
                </div>
            </div>
            <div>
                <select value={props.settings.paidvFree} name="paidvFree" onChange={handleChange} id="" >
                    <option value="all">All</option>
                    <option value="paid">Paid Only</option>
                    <option value="free">Free Only</option>
                </select>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <input type="checkbox" name="favorites" onChange={handleChange} id="" checked={props.settings.favorites} style={{ width: '15px', height: "15px" }} />
                    <label htmlFor="fav">Favoriets only</label>
                </div>
            </div>
        </div>
    </section>
}