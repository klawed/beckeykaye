function as(response) {
  var data = response.data;
  //  console.log(data);
  //  console.log(atob(data['content']))
	$('#artist-statement').html(atob(data['content']));
}

function cv(response) {
  var data = response.data;
  $('#cv-content').html(atob(data['content']));
}

function bio(response) {
  var data = response.data;
  $('#bio-content').html(atob(data['content']));
}
var script = document.createElement('script');
var base = 'https://api.github.com/repos/klawed/beckeykaye/contents/'
script.src = base + 'artist-statement.txt?callback=as';
$('head').append(script);

script = document.createElement('script');
script.src = base + 'cv.txt?callback=cv';
$('head').append(script);

script = document.createElement('script');
script.src = base + 'bio.txt?callback=bio';
$('head').append(script);
