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
        var to_insert = '<div class="row"><div class="col"><p>Right click and select "save image as..." to save the image</p></div></div><div class="row"><div class="col">';
        for (var i = 1; i <= 15; i++) {
            to_insert += '\n<img src="' + url + id + '(' + i + ').jpg" style="max-width: 75vw;">\n<div style="height: 10px;">';
        }
        to_insert += '\n</div></div>';

        document.getElementById('images').innerHTML = to_insert;
    }
    //
    catch (error) {
        document.getElementById('images').innerHTML = "<p>ID not valid!</p>";
        return;
    }
}
