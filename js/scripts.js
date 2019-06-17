$(document).ready(function() {
  locations = []
  locations.push(new Place("USA", "OR", "Portland", ["Pittock Mansion", "Pioneer Courthouse Square", "Portland Oregon Sign"], "img/portland.jpg"));
  locations.push(new Place("USA", "CA", "San Diego", ["Balboa Park", "Lego Land", "Sea World"], "img/sandiego.jpg"));
  locations.push(new Place("USA", "PA", "Philladelphia", ["Liberty Bell", "Independence Hall", "Ben Franklin Statue"], "img/philladelphia.jpg"));

  for (var i = 0; i < locations.length; i++) {
    locations[i].addToWebpage();
    console.log(locations[i].city, "added");
  }

  $(".place").click(function(event){
    $(event.target).parent().children(".landmarks").toggle();
  });

  // $("#place1").append(location1.image);

});

function Place (country, state, city, landmarks, image) {
  this.country = country,
  this.state = state,
  this.city = city,
  this.landmarks = landmarks,
  this.image = image
}
Place.prototype.fullLocation = function() {
  return this.country + " " + this.state + " " + this.city;
}

Place.prototype.addToWebpage = function() {
  var code = `<div class="place">
  <img src="${this.image}"><br>
  <h2> ${this.fullLocation()} </h2>
  <p class="landmarks">`;
  this.landmarks.forEach(function(landmark){
    code += `${landmark}<br>`;
    // code += "<li>" + landmark + "</li>";
  });
  code += `</p></div>`;
  $(".container").append(code);

  // $(".container").append("<p>Hello</p>")
}
