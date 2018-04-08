var img = new Array("https://github.com/ACCSoftwareBootcamp/newBandits/blob/master/week4/Projects/Project5/img/1.jpg?raw=true",
    "https://github.com/ACCSoftwareBootcamp/newBandits/blob/master/week4/Projects/Project5/img/2.jpg?raw=true",
    "https://github.com/ACCSoftwareBootcamp/newBandits/blob/master/week4/Projects/Project5/img/3.jpg?raw=true",
    "https://github.com/ACCSoftwareBootcamp/newBandits/blob/master/week4/Projects/Project5/img/4.jpg?raw=true",
    "https://github.com/ACCSoftwareBootcamp/newBandits/blob/master/week4/Projects/Project5/img/5.jpg?raw=true",
    "https://github.com/ACCSoftwareBootcamp/newBandits/blob/master/week4/Projects/Project5/img/6.jpg?raw=true",
    );

var imgElement = document.getElementById("imgDemo");
var i = 0;
var imgLen = img.length;

        function nxt()
        {
            if(i < imgLen-1)
                {
                    i++;
                }
            else{
                    i=0;                
                }

                imgElement.src = img[i];                    
        }

        function prvs()
        {
            if(i > 0)
                {
                    i--;
                }
            else
            {
                i = imgLen-1;
            }
                imgElement.src = img[i];                    
        }
