//Create Sample Gif Buttons (Initial Load)
sampleGif = ['Zelda', 'Mario 64', 'Space Invaders', 'Game Consoles', 'Kirby']
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


// Pull the Gif Images and Display them
$(document).on('click', '.gifBtn', function () {

  $('#gifArea').empty()

  let url = "http://api.giphy.com/v1/gifs/search";
  url += '?' + $.param({
    'api_key': "EVin2ZZKd1lWiJvD1LG1L0PoysDpYJKy",
    'q': `${$(this).attr('data-gif')}`,
    'limit': 9
  });

  $.get(url)
    .then(function (r) {
      r.data.forEach(gif => {
        $('#gifArea').append(`
        <div class="col-md-6 col-lg-4" >
        <a href="${gif.images.original.url}" target="_blank"><img class="gif-image" src="${gif.images.original.url}" alt=${$(this).attr('data-gif')}></a>
        <h4 class="gif-rating">Rated: ${gif.rating}</h4>
        </div>
        `)
      });
    })
    .catch(function (e) { console.log(e) })
})


//Clear Gify Area
$('.clearGif').on('click', function () {
  event.preventDefault()
  $('#gifArea').empty()
})

