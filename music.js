/**
 * Created by h205p3 on 2/13/17.
 */
function getArtist() {
    var artist = document.getElementById("inputArtist").value;
    console.log(artist);
    url = "http://www.songsterr.com/a/ra/songs/byartists.json?artists=";
    url += '?' + $.param({
            'a': artist
        });
    url += '&' + $.param({

            'a': artist
        });
}

$.ajax({
    url: "http://www.songsterr.com/a/ra/songs/byartists.json?artists=",
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(result) { console.log(result) },
    error: function() { alert('Failed!'); }
});


