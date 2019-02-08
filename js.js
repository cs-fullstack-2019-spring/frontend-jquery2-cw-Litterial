/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/


/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */


/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */

/******QUESTION 1******************/
$('.hello').on("click",turnWhite);  /*event listener when you click on any class called hello*/

function turnWhite()  /*calls function*/
{
    $('.hello').addClass('whiteBack');   /*adds a new class*/
}

/********QUESTION 2**************/
$('h1').on("mouseover",changeDimensions);    /*event listner to call the element that contains 'Selectors Exercise*/

    function changeDimensions()
    {
        $('h1').addClass('makeMe20');   /*adds class to change size*/
        $('h1').on('mouseout',normal);     /* event listener that looks for mousing out*/

        function normal()   /*calls function*/
        {
            $('h1').removeClass('makeMe20');  /*removes the class that changes size*/
        }

    }


/*********QUESTION 3**************************/
/*The sentence 'I am a paragraph with a class' is inside a p tag and a class hello*/
$('p.hello').on('click',addPeriod);    /*adds eventlistner*/
function addPeriod() /*calls function*/
{
    $('p.hello').append("."); /*uses append to add a period to the end of the sentence.*/
}