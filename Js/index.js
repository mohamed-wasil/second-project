// var mouseCircle = document.getElementById('mouseCircle');

// document.addEventListener('mousemove', function (e) {
//     var x = e.clientX;
//     var y = e.clientY;

//     mouseCircle.style.left = `${x}px`;
//     mouseCircle.style.top = `${y}px`;
// })

var projectsBox = document.querySelectorAll('.projects__info img')
var blogBox = document.querySelectorAll('.blog__info img')
var overlight = document.getElementById('overlight');
var overImg = document.getElementById('overImg')
var closeBtn = document.getElementById('closeBtn');

// to show slide in section project
for (var i = 0; i < projectsBox.length; i++) {

    projectsBox[i].addEventListener('click', function (e) {
        var item = e.target.getAttribute('src');
        var itemAlt = e.target.getAttribute('alt');
        overlight.classList.remove('d-none')
        overImg.setAttribute('src', `${item}`);
        overImg.setAttribute('alt', `${itemAlt}`);
    })
}

// to show slide in section blog
for (var i = 0; i < blogBox.length; i++) {

    blogBox[i].addEventListener('click', function (e) {
        var item = e.target.getAttribute('src');
        var itemAlt = e.target.getAttribute('alt');
        overlight.classList.remove('d-none')
        overImg.setAttribute('src', `${item}`);
        overImg.setAttribute('alt', `${itemAlt}`);
    })
}


// To close slide
closeBtn.addEventListener('click', function (e) {
    overlight.classList.add('d-none')
});


