/**
 * Created by h205p3 on 2/13/17.
 */
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
    $("#songs").empty();
    for(var i=0;i<result.length;i++) {
        $("#songs").append("<tr><td><a href='http://www.songsterr.com/a/wa/song?id="+ result[i].id + "'>" + result[i].title + "</a></td><td>" + result[i].id  + "</td></tr>");
    }

}

function removeTables() {
    var tables = document.getElementsByTagName("TABLE");
    for (var i=tables.length-1; i>=0;i-=1)
        if (tables[i]) tables[i].parentNode.removeChild(tables[i]);
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
