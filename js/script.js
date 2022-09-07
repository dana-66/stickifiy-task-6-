
console.log("Welcome to Stickify");

// initializing the variables
let songIndex = 0;
let audioElement = new Audio('media/PondeReplay.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('song1'));


let songs = [
    {songName: "Yeah Right" , filePath: "media/yeahRight.mp3"},
    {songName: "Pon de Replay" , filePath: "media/PondeReplay.mp3"},
    {songName: "Die For You" , filePath: "media/dieForYou.mp3"},
    {songName: "i could cry just thinking about you (full version)" , filePath: "media/CouldCry.mp3"},
    {songName: "This is Why we cant have nice things" , filePath: "media/cantHaveNiceThings.mp3"},
    {songName: "epiphany" , filePath: "media/epiphany.mp3"},
    {songName: "Love on the brain" , filePath: "media/loveOnTheBrain.mp3"},
    {songName: "A different Age" , filePath: "media/AdifAge.mp3"},
    {songName: "Cherry" , filePath: "media/Cherry.mp3"},
    {songName: "something in the way" , filePath: "media/SomethingInTheWay.mp3"},
    {songName: "Matilda" , filePath: "media/Matilda.mp3"}
]

// songItems.forEach((element, i)=>{  
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
// })
// audioElement.play();

//Handle play/pause click 
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=> {
    //Update Seekbar 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;  
})

myProgressBar.addEventListener('change',()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration /100 ;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle'); 
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `../media/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=11){
        songIndex = 0
    }
    else{
        songIndex += 1; 
    }
    audioElement.src = `../media/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    } 
    audioElement.src = `../media/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
})
