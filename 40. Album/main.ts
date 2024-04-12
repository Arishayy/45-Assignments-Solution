function make_album(artist_name: string, album_title: string, tracks?: number){
    let album:{artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

    if(tracks !== undefined){
        album.tracks = tracks;
    }

    return album;


}

// calling the function
let album1 =  make_album("Drake" , "Certified Lover boy");
let album2 =  make_album("Aleem RK" , "Different Phase");
let album3 =  make_album("Wallows"  , "Remote" , 6);

console.log(album1);
console.log(album2);
console.log(album3);

