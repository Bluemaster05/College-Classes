export type Video = {
    id: number,
    name: string,
    isFree: boolean,
    isPurchased: boolean,
    duration: string,
    size: number,
    price: number,
    url: string
    isFavorited: boolean,
    inCart: boolean
}

export type RawVideo = {
    id: number,
    name: string,
    isFree: boolean,
    isPurchased: boolean,
    duration: string,
    size: number,
    price: number,
    url: string
}