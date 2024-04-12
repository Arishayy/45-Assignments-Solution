function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling the function
var album1 = make_album("Drake", "Certified Lover boy");
var album2 = make_album("Aleem RK", "Different Phase");
var album3 = make_album("Wallows", "Remote", 6);
console.log(album1);
console.log(album2);
console.log(album3);
