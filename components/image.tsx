import { useEffect, useState } from "react";
import { TextInput, View, Image, StyleSheet, Dimensions } from "react-native";
const img = require("../assets/favicon.png")

const style = StyleSheet.create({
    thumbnail: {
        width: "100%"
    },
    gridItem: {
        // flex: 2,

        width: "50%",
        backgroundColor: "red",
        borderWidth: 1,
        borderColor: "black"
    },
})

const screenWidth = Dimensions.get("window").width || 360 //get screen width or use 360 = avg screen width
/**
 * Api:  
 * https://www.artic.edu/iiif/2/{identifier}/{region}/{size}/{rotation}/{quality}.{format}  
 * 
 * get Image from artic.edu image api  
 * returns img with width closest to {@link width} available
 *   
 * @param imageId
 * @param width desired width
 */
function getImgUrl(imageId: string, width: number) {
    let urlMeta = "https://www.artic.edu/iiif/2/" + imageId //get sizes from here
    // let imgUrl = `https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/900,/0/default.jpg` //hard coded todo
    https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/843,/0/default.jpg
    // https://www.artic.edu/iiif/2/28560/full/200/0/default.jpg

    // find fitting width
    return fetch(urlMeta).then(res => {

        return res.json().then(img => {

            // console.log("img found")
            if (!img.sizes) throw new Error("Cant get available image sizes");

            let widthFound = null
            for (let size of img.sizes) {
                // if (!size.width) continue
                if (!widthFound) { widthFound = size.width; continue }
                if ((width - widthFound) > (width - size.width)) widthFound = size.width
                // console.log(size.width)
            }

            // fetch image with this width
            let url = `https://www.artic.edu/iiif/2/${imageId}/full/${widthFound},/0/default.jpg`
            console.log("url")
            console.log(url)
            return url
        })
        // .catch(err => {
        //     console.log("res that ")
        //     console.log(res)
        //     console.error(err)
        //     console.log(urlMeta)
        // })
    })
}

export const Thumbnail = (props: { imageId: string }) => {
    // let thumbnailUrl = "https://www.artic.edu/iiif/2/25c31d8d-21a4-9ea1-1d73-6a2eca4dda7e/full/900,/0/default.jpg" //todo
    let imageId = props.imageId

    let [imageUrl, setImageUrl] = useState<string | null>(null);

    // set image url when found
    useEffect(() => {
        /** 
         *  {@link Thumbnail} gets called first when Grid is initialized, could load when data is rdy but id rather show some loading info... todo 
         */
        if (!imageId) return

        getImgUrl(imageId, screenWidth / 2).then(url => setImageUrl(url))
        // .catch(err => {
        //     console.log(imageUrl)
        //     console.error(err)
        // })
    }, [imageId]);

    let imageWidth
    if (imageId) {
        // imgUrl = getImgUrl(imageId, screenWidth / 2) // todo else do error or loading
    }

    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


    return (
        <View>

            {/* <Image
                // style={styles.tinyLogo}
                // source={img}
            /> */}
            {
                imageUrl ?
                    <Image
                        style={{ width: 50, height: 50 }}

                        source={{ uri: imageUrl }}
                    // source={{  }}   
                    />
                    : <></>
            }
            {/* <Image
                width={100}
                height={100}
                // source={{ uri: thumbnailUrl }}
                src={thumbnailUrl}></Image> */}
        </View>
    );
};
