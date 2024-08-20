export const FetchMemes = async ()=> {
    let response = await fetch('https://api.imgflip.com/get_memes');
    let json = await response.json();
    return json.data.memes;
}
