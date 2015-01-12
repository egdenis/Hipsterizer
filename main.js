window.onload = function(){

  //var data = get_data("egdenis");



SC.initialize({
  client_id: 'c89a75d260dc1e0d9ad6a8e7365c6339'
});

var id;

SC.get('/resolve', {
  url: 'https://soundcloud.com/egdenis'
}, function(user) {
  console.log(arguments)
  id = user.id
});

SC.get("/users/"+id+"/favorites/", {limit:1000}, function(tracks){
  tracks.forEach(function(element) {
  console.log(element.title);
  console.log(element.favoritings_count);

  })
  console.log(tracks.length)
});

data = []
  var width = 420,
      barHeight = 20;

  var x = d3.scale.linear() 
    .domain([0, d3.max(data)])
    .range([0, width]);

  var chart = d3.select(".chart")
      .attr("width", width)
      .attr("height", barHeight * data.length);

  var bar = chart.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"})
    
  bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1);

  bar.append("text")
    .attr("x", function(d){return x(d) - 3;})
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) {return d; });  

}

function get_data(username){

  var id,
      tracks = [],
      request_url = '//soundcloud.com/'+username;

  SC.get('/resolve', {
    url: request_url
  }, function(user) {
    console.log(user)
    id = user.id
  });

  SC.get("/users/"+id+"/favorites/", {limit:1000}, function(songs){
    songs.forEach(function(element) {
    tracks.push(element.favorites_count)
    })
  });
  return tracks;
}