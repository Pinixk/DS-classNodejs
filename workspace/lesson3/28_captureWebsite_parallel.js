import * as L from "fxjs/Lazy"
import * as C from "fxjs/Concurrency"
import {go} from 'fxjs';
import captureWebsite from 'capture-website'

const BATCH = 5;
const process = ([url, filename]) => captureWebsite.file(url, filename, {fullPage: true})

async function main(){
    const list = []
    const from = 1442;
    const to = 1443;
    for (let i = from; i < to; i++) {
        for (const e of ['A','B','C','D']){
            const url = `https://codeforces.com/contest/${i}/problem/${e}`
            await process([url, `./img/${i}${e}.png`])
        }
    }
    await go(
        list,
        L.map(process),
        C.takeAll(BATCH)
    )
    console.log('Scrapping is completed');
    // return ret;
}
main()