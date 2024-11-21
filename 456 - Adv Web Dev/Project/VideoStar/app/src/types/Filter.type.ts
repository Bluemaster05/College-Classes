import { Duration } from "./Duration.type"
import { PVF } from "./PVF.type"
import { SortType } from "./SortType.type"

export type Filter = {
    title: string,
    min: number,
    max: number,
    paidvFree: PVF,
    favorites: boolean,
    dur: Duration,
    sort: SortType,
}