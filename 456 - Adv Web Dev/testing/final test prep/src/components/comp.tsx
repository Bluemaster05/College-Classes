import { Children, PropsWithChildren } from "react";

export function Comp(props: PropsWithChildren<{ this: string}>) {
    return <div>
        {props.children}
        <p>{props.this}</p>
    </div>
}