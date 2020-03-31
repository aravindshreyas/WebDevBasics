let ImageSLide=document.querySelectorAll(".Img");
let LeftButton=document.querySelector(".Prev");
let RightButton=document.querySelector(".Next");
let Indi=document.querySelectorAll(".size")

let counter=0;
function slideLeft()
{   ImageSLide[counter].classList.remove('active');
    Indi[counter].classList.remove('active1')
    counter=counter===0? ImageSLide.length-1:counter-1;
    ImageSLide[counter].classList.add('active');
    Indi[counter].classList.add(active1);

}

function slideRight()
{
    ImageSLide[counter].classList.remove('active');
    Indi[counter].classList.remove('active1');
    counter=(counter===ImageSLide.length-1)? 0: counter+1;
    ImageSLide[counter].classList.add('active');
    Indi[counter].classList.add('active1');
}
function changeSlide(x)
{
    ImageSLide[counter].classList.remove('active');
    Indi[counter].class.remove('active1');
    ImageSLide[x].classList.add('active');
    Indi[x].classList.add('active1');
    counter=x;
}