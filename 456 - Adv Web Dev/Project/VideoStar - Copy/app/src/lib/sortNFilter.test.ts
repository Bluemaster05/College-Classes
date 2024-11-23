// import { describe, expect, test} from "vitest"
// import { sortNFilter } from "./sortNFilter.lib"

// describe("sortNFilter()", () => {
//     test("test 1", () => {
//         expect(sortNFilter([{
//             id: 0,
//             name: "A Girl Taking a Selfie With Her Boyfriend",
//             isFree: false,
//             isPurchased: false,
//             duration: "00:00:16.93",
//             size: 7990219,
//             price: 7.62,
//             url: "https://videostar.dacoder.io/videos/a-girl-taking-a-selfie-with-her-boyfriend.mp4",
//             isFavorited: false
//           }], {
//             title: '',
//             min: NaN,
//             max: NaN,
//             paidvFree: 'all',
//             favorites: false,
//             dur: 'none',
//             sort: 'none',
//           })).toEqual([{
//             id: 0,
//             name: "A Girl Taking a Selfie With Her Boyfriend",
//             isFree: false,
//             isPurchased: false,
//             duration: '00:00:16.93',
//             size: 7990219,
//             price: 7.62,
//             url: "https://videostar.dacoder.io/videos/a-girl-taking-a-selfie-with-her-boyfriend.mp4",
//             isFavorited: false
//           }])
//     })
//     test("test 2", () => {
//         expect(sortNFilter([{
//             "id": 0,
//             "name": "A Girl Taking a Selfie With Her Boyfriend",
//             "isFree": false,
//             "isPurchased": false,
//             "duration": "00:00:16.93",
//             "size": 7990219,
//             "price": 7.62,
//             "url": "https://videostar.dacoder.io/videos/a-girl-taking-a-selfie-with-her-boyfriend.mp4",
//             "isFavorited": false
//           }], {
//             title: '',
//             min: NaN,
//             max: NaN,
//             paidvFree: 'all',
//             favorites: false,
//             dur: 'none',
//             sort: 'none',
//           })).toEqual([{
//             "id": 0,
//             "name": "A Girl Taking a Selfie With Her Boyfriend",
//             "isFree": false,
//             "isPurchased": false,
//             "duration": "00:00:16.93",
//             "size": 7990219,
//             "price": 7.62,
//             "url": "https://videostar.dacoder.io/videos/a-girl-taking-a-selfie-with-her-boyfriend.mp4",
//             "isFavorited": false
//           }])
//     })
// })