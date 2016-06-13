function Place(location, landmarks, time, notes) {
  this.placeLocation = location;
  this.placeLandmarks = landmarks;
  this.placeTime = time;
  this.placeNotes = notes;
}

// var england = new Place ('England', ['Big Ben', 'Buckingham Palace', 'London Eye'], 'April through September', 'Top o the morning, Governor!');
//
// var japan = new Place ('Japan', ['Tokyo Tower', 'Auto Salon', 'Asakusa Temple'], 'April 29 to May 5', 'Osu!');
//
// var bahamas = new Place ('Bahamas', ['Nassau', 'Fort Fincastle', 'Parliamant Square'], 'June through August', 'You put the lime in the coconut');

$(document).ready(function() {
  $('form#placeForm').submit(function(event) {
    event.preventDefault();
    var inputLocation = $('#place').val();
    var inputLandmarks = [$('#landmarks').val()];
    var inputTime = $('#time').val();
    var inputNotes = $('#notes').val();
    var newPlace = new Place(inputLocation, inputLandmarks, inputTime, inputNotes);

    $('#placeList').append('<li>'+ newPlace.placeLocation +'</li>');

  });
});
