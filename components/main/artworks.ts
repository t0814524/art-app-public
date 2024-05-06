
export interface ArtFilter {
    searchValue?: string
}
export async function getArtworks(filter: ArtFilter) {

    let url = "https://api.artic.edu/api/v1/artworks"
    if (filter.searchValue) url += "/search?q=" + filter.searchValue?.toLowerCase()


    console.log("search handle")
    console.log(url)

    // setSearchQuery(text || "");
    // Filter data based on search query
    // let res = await fetch("https://api.artic.edu/api/v1/artworks/search?q=" + searchValue.toLowerCase())
    // let resJson = await res.json()
    // console.log(resJson)

    return fetch(url).then(res => res.json())
    // .then(async (res) => {
    //     console.log("res")
    //     let resJson = await res.json()
    //     resJson.data

    // }).catch(err => {
    //     console.log(err)
    // })

};

export async function getArtworkData(api_link: string) {
    // let url = "https://api.artic.edu/api/v1/artworks/" + id
    return fetch(api_link).then(res => res.json())
};