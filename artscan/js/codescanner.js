/**
 * Created by Abdelkarim on 11/23/2015.
 */
$('#reader').html5_qrcode(function(data){
        // do something when code is read
    },
    function(error){
        //show read errors
    }, function(videoError){
        //the video stream could be opened
    }
);