//Create Sample Gif Buttons (Initial Load)
sampleGif = ['surfing', 'wsl', 'waves', 'beaches', 'beer']

sampleGif.forEach(gif => {
  $('#buttonArea').append(`
     <button class="gifBtn" data-gif="${gif}"> ${gif}</button>
   `)
});


//Adding new Gif Buttons
$('#submitGif').on('click', function () {
  event.preventDefault()
  $('#buttonArea').append(`
     <button class="gifBtn" data-gif="${$('#gifName').val().trim()}"> ${$('#gifName').val().trim()}</button>
   `)
  $('#gifName').val('')
})


// Pull the Gif Images and Display
$(document).on('click', '.gifBtn', function () {

  $('#gifArea').empty()

  let url = "http://api.giphy.com/v1/gifs/search";
  url += '?' + $.param({
    'api_key': "EVin2ZZKd1lWiJvD1LG1L0PoysDpYJKy",
    'q':`${$(this).attr('data-gif')}`,
    'limit': 10
  });


  $.get(url)
    .then(function (r) {
      r.data.forEach(gif => {

        $('#gifArea').append(`
        <h4>${gif.rating}</h4>
        <img src="${gif.images.original.url}" alt="">
        `)
      });
    })
    .catch(function (e) { console.log(e) })
  })