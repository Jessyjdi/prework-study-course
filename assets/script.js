var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

/*console.log(topics[0]);
console.log(topics[1]);
console.log(topics[2]);
console.log(topics[3]);*/

//adding functions
function listoftopics(){
    for(var x=0; x<topics.length; x++){
        console.log(topics[x]);
}
}

function selectTopic(){
if(randomTopic ==='HTML')
{
    console.log("Let's study HTML!");
}else if(randomTopic ==='CSS')
{
    console.log("Let's study CSS!");
}else if(randomTopic ==='Git')
{
    console.log("Let's study Git!");
}else if(randomTopic ==='JavaScript')
{
    console.log("Let's study JavaScript");
}else 
{
  console.log("Please try again!")
}
}

console.log('Here are the topics we learned through Prework');
listoftopics();
console.log('which topic we study first?');
selectTopic();

