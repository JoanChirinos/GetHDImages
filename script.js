function getID() {

    var url_string = window.location.href;
    var url = new URL(url_string);
    var given_id = url.searchParams.get("id");
    console.log(given_id);
    if (given_id != null) {
        document.getElementById('user_id').value = given_id;
    }
    get_photos();

}



function get_photos() {

    var url = "https://s3.amazonaws.com/iq-cache/A9X6594/gallery/1000662455/1200/"
    var id = "";
    try {
        id = document.getElementById('user_id').value;
        console.log("ID given: " + id);
    }
    //
    catch (error) {
        document.getElementById('images').innerHTML = "<p>ID not valid!</p>";
        return;
    }

    try {
        id = /[0-9]+/.exec(id)[0];
        if (id == '') {
            console.log('ID extracted: ' + id);
            document.getElementById('images').innerHTML = "<p>ID not valid!</p>";
            return;
        }
        console.log("ID extracted: " + id);
        var to_insert = '<div class="row"><div class="col"><p>Right click and select "save image as..." to save the image</p></div></div>\n';
        to_insert += '<div class="row">'
        for (var i = 1; i <= 4; i++) {
            to_insert += '<div class="col">\n<img src="' + url + id + '(' + i + ').jpg" style="max-height: 50vh;" class="img-thumbnail img-fluid">\n<div style="height: 10px;"></div></div>';
        }
        to_insert += '</div><div class="row">'
        for (var i = 5; i <= 8; i++) {
            to_insert += '<div class="col">\n<img src="' + url + id + '(' + i + ').jpg" style="max-height: 50vh;" class="img-thumbnail img-fluid">\n<div style="height: 10px;"></div></div>';
        }
        to_insert += '</div><div class="row">'
        for (var i = 9; i <= 12; i++) {
            to_insert += '<div class="col">\n<img src="' + url + id + '(' + i + ').jpg" style="max-height: 50vh;" class="img-thumbnail img-fluid">\n<div style="height: 10px;"></div></div>';
        }
        to_insert += '</div><div class="row">'
        for (var i = 13; i <= 16; i++) {
            to_insert += '<div class="col">\n<img src="' + url + id + '(' + i + ').jpg" style="max-height: 50vh;" class="img-thumbnail img-fluid">\n<div style="height: 10px;"></div></div>';
        }
        to_insert += '</div><div class="row">'
        for (var i = 17; i <= 20; i++) {
            to_insert += '<div class="col">\n<img src="' + url + id + '(' + i + ').jpg" style="max-height: 50vh;" class="img-thumbnail img-fluid">\n<div style="height: 10px;"></div></div>';
        }
        to_insert += '</div>\n<div class="row"><div class="col"><p>There may be blank buffer images above. This is done because some people took more pictures than others</p></div></div>';

        document.getElementById('images').innerHTML = to_insert;
    }
    //
    catch (error) {
        document.getElementById('images').innerHTML = "<p>ID not valid!</p>";
        return;
    }
}
