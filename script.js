let dogurl = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector('button');
btn.addEventListener('click', async() => {
    let imgsrc =  await getimage();
    let img = document.getElementById('image');
    img.setAttribute("src",imgsrc);
})
async function getimage() {
    try {
        let result = await axios.get(dogurl);
        return result.data.message;
    } catch(err) {
        console.log(err);
    }
}