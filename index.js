document.addEventListener("DOMContentLoaded",function()
{
    document.getElementById("check").addEventListener("click",calculateResult)
    document.getElementById("clear").addEventListener("click",clearAll);
});
function calculateResult()
{
    var num=Number(document.getElementById("num").value);
    var rev=0,temp=num;
    var numofDigits=countDigits(num);
    while(num!==0)
    {
        rev+=Math.pow(num%10,numofDigits)
        console.log(rev);
        num=parseInt(num/10);
    }
    if(temp===rev)
    {
        htmlRender(true);
    }else{
        htmlRender(false);
    }    
}
function countDigits(num)
{
    var count=0;
    console.log(num,"Number Received");
    while(num!==0)
    {
        count++;
        console.log("Count = ");
        num=parseInt(num/10);
    }
    console.log(count,"No. of Digits");
    return count;
}
function htmlRender(flag)
{
    const res= flag===true?'<p class="pos-result-text">It is an Armstrong Number!</p>':"<p class='neg-result-text'>It is not an Armstrong Number!</p>";
    document.querySelector('.res-container').innerHTML=res;
}

function clearAll()
{
    document.querySelector('.res-container').innerHTML="";
    document.getElementById("num").value=""
}