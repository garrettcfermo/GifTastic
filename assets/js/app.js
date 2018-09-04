// API Information

let url = "http://api.giphy.com/v1/gifs/search";
url += '?' + $.param({
  'api_key': "EVin2ZZKd1lWiJvD1LG1L0PoysDpYJKy",
  'q': `surfing`,
  'limit': 10
});


$.get(url)
  .then(function(r) {
    console.log(r.data)
    r.data.forEach(gif => {
      console.log(gif.images.original.url)
      console.log(gif.rating)
    });
  })
  .catch(function(e){console.log(e)})


// Sample Gif Data

sampleGif=['surfing','wsl','waves','beaches','beer']
