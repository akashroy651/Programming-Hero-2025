console.log('external file');

    //  option  2for click event handler
    
        function makeRed(){
            document.body.style.backgroundColor ='red'
        }
      function makeYellow(){
        document.body.style.backgroundColor ='yellow'
      }

      //  option 3: get Element by id  and then set onclick

   const btnMakeBlue = document.getElementById('btn-make-blue')
    // console.log(btnMakeBlue)
    btnMakeBlue.onclick = function makeBlue(){
        document.body.style.backgroundColor = 'blue'
    }


     const btnMakePurple = document.getElementById('btn-make-purple')
    // console.log(btnMakePurple)
    btnMakePurple.onclick = function makePurple (){
        document.body.style.backgroundColor = 'purple'
    }

