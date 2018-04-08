 function displayNextImage() {
          x = (x === images.length - 1) ? 0 : x + 1;
          document.getElementById("img").src = images[x];
      }
      function changeImage() {
          setInterval(displayNextImage, 5000);
      }

      var images = [], x = -1;
      images[0] = "https://github.com/ACCSoftwareBootcamp/newBandits/blob/master/week4/Projects/Project4/img/background1.jpg?raw=true";
      images[1] = "https://github.com/ACCSoftwareBootcamp/newBandits/blob/master/week4/Projects/Project4/img/background2.jpg?raw=true";
      images[2] = "https://github.com/ACCSoftwareBootcamp/newBandits/blob/master/week4/Projects/Project4/img/background3.jpg?raw=true";