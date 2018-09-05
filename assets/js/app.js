//Create Sample Gif Buttons (Initial Load)
sampleGif = ['surfing', 'wsl', 'waves', 'beach', 'beer']

sampleGif.forEach(gif => {
  $('#buttonArea').append(`
     <button class="gifBtn" data-gif="${gif}"> ${gif}</button>
   `)
});


//Adding new Gif Buttons
$('.submitGif').on('click', function () {
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
    'limit': 9
  });

  $.get(url)
    .then(function (r) {
      r.data.forEach(gif => {
        $('#gifArea').append(`
        <div class="col-md-4" >
        <h4 class="gif-rating">${gif.rating}</h4>
        <img class="gif-image" src="${gif.images.original.url}" alt=${$(this).attr('data-gif')}>
        </div>
        `)
      });
    })
    .catch(function (e) { console.log(e) })
  })