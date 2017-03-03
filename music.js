function getId() {
    var artist = document.getElementById("inputArtist").value;
    console.log(artist);
    var url = "http://www.songsterr.com/a/ra/songs/byartists.json?";
    url += $.param({
            'artists': artist
        });
console.log (url);
    $.ajax({
    //    url: "http://www.songsterr.com/a/ra/songs/byartists.json?artists=",
        url: url,
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        success: function(result) { console.log(result); handler(result);},
        error: function() { alert('Failed!'); }
    });


}


function handler(result) {

    for(var i=0;i<result.length;i++) {
        $("#songs").append("<tr><td><a href='http://www.songsterr.com/a/wa/song?id='>" + result[i].title + "</a></td><td>" + result[i].id  + "</td></tr>");
    }

}


/*
function getSong() {
    var song = document.getElementById("inputSong").value;
    console.log(song);
    var url = "http://www.songsterr.com/a/ra/songs/bysongs.json?";
    url += $.param({
        'songs': song
    });
    console.log (url);
    $.ajax({
        //    url: "http://www.songsterr.com/a/ra/songs/byartists.json?artists=",
        url: url,
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        success: function(result) { console.log(result); },
        error: function() { alert('Failed!'); }
    });

}
    */
