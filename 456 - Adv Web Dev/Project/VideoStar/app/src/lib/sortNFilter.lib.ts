import { Filter } from "../types/filter.type";
import { Video } from "../types/video.type";

export function sortNFilter(videos: Video[], settings: Filter) {
    let filtVideos = structuredClone(videos)
    
    if (settings.title !== ''){
        filtVideos = filtVideos.filter(
            vid => vid.name.toLowerCase().includes(settings.title.toLowerCase())
        )
    }
    if (!isNaN(settings.max)){
        filtVideos = filtVideos.filter(
            vid => Number(vid.duration) < settings.max
        )
    }
    if (!isNaN(settings.min)){
        filtVideos = filtVideos.filter(
            vid => Number(vid.duration) > settings.min
        )
    }
    if (settings.paidvFree !== 'all'){
        if (settings.paidvFree === 'paid') {
            filtVideos = filtVideos.filter(
                vid => !vid.isFree
            )
        }
        if (settings.paidvFree === 'free'){
            filtVideos = filtVideos.filter(
                vid => vid.isFree
            )
        }
    }
    if (settings.favorites){
        filtVideos = filtVideos.filter(
            vid => vid.isFavorited
        )
    }
    if (settings.dur !== 'none'){
        if (settings.dur === '>1'){
            filtVideos = filtVideos.filter(
                vid => Number(vid.duration) > 60
            )
        }
        if (settings.dur === '1>'){
            filtVideos = filtVideos.filter(
                vid => Number(vid.duration) < 60
            )
        }
        if (settings.dur === '30>'){
            filtVideos = filtVideos.filter(
                vid => Number(vid.duration) < 30
            )
        }
        if (settings.dur === '15>'){
            filtVideos = filtVideos.filter(
                vid => Number(vid.duration) < 15
            )
        }
    }
    if (settings.sort !== 'none'){
        if (settings.sort === 'a-z') {
            filtVideos.sort(
                 (a, b) => {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                      return -1;
                    }
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                      return 1;
                    }
                    return 0;
                  }
            )
        }
        if (settings.sort === "z-a") {
            filtVideos.sort(
                (a, b) => {
                   if (a.name.toLowerCase() > b.name.toLowerCase()) {
                     return -1;
                   }
                   if (a.name.toLowerCase() < b.name.toLowerCase()) {
                     return 1;
                   }
                   return 0;
                 }
           )
        }
        if (settings.sort === 'g-l') {
            filtVideos.sort(
                (a, b) => {
                   if (Number((a.duration)) > Number(b.duration)) {
                     return -1;
                   }
                   if (Number((a.duration)) < Number(b.duration)) {
                     return 1;
                   }
                   return 0;
                 }
           )
        }
        if (settings.sort === 'l-g') {
            filtVideos.sort(
                (a, b) => {
                   if (Number((a.duration)) < Number(b.duration)) {
                     return -1;
                   }
                   if (Number((a.duration)) > Number(b.duration)) {
                     return 1;
                   }
                   return 0;
                 }
           )
        }
    }
    return filtVideos
}