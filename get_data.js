<script src="//connect.soundcloud.com/sdk.js"></script>
<script>
  SC.initialize({
    client_id: "YOUR_CLIENT_ID",
    redirect_uri: "http://example.com/callback.html",
  });
</script>

var script = document.createElement("script");
script.src = "http://connect.soundcloud.com/sdk.js";
document.body.appendChild(script);

SC.initialize({
  client_id: 'c89a75d260dc1e0d9ad6a8e7365c6339'
});

var id;

SC.get('/resolve', {
  url: 'https://soundcloud.com/egdenis'
}, function(user) {
  id = user.id
});

SC.get("/users/"+id+"/favorites/", {limit:1000}, function(tracks){
  tracks.forEach(function(element) {
  console.log(element.title);
  console.log(element.favoritings_count);

  })
  console.log(tracks.length)
});
