import captureWebsite from 'capture-website'
const process = (url, filename) => captureWebsite.file(url, filename, {fullPage: true})

async function main(){
    const from = 1434;
    const to = 1435;
    for (let i = from; i < to; i++) {
        for (const e of ['A','B','C','D']){
            const url = `https://codeforces.com/contest/${i}/problem/${e}`
            await process(url, `./img/${i}${e}.png`)
        }
    }
    console.log('Scrapping is completed');
}
main()