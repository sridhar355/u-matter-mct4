const tracks = [
    { title: "RainFall", src:"https://www.chosic.com/wp-content/uploads/2022/03/alex-productions-ambient-music-nature(chosic.com).mp3"},
    { title: "RiverFlow", src:"https://www.chosic.com/wp-content/uploads/2021/04/kvgarlic__largestreamoverloginforestmarch(chosic.com).mp3"},
    { title: "OceanWaves", src:"https://www.chosic.com/wp-content/uploads/2022/08/beach-waves(chosic.com).mp3"},
    { title: "Birds", src:"https://www.chosic.com/wp-content/uploads/2022/01/Birds-Of-Passage-Spheria-Eternalls-Epilogue(chosic.com).mp3"},
    
    { title: "Thunder", src:"https://www.chosic.com/wp-content/uploads/2021/04/fission9__thunder-and-beginning-of-rainfall(chosic.com).mp3"}
];

const playlistElement = document.getElementById('playlist');
let currentAudio = null;
let currentProgress = null;
let intervalId = null;

// Function to create playlist items
function createPlaylist() {
    tracks.forEach((track, index) => {
        const listItem = document.createElement('li');
        
        const title = document.createElement('span');
        title.innerText = track.title;
        title.classList.add('title');

        const playButton = document.createElement('button');
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        playButton.addEventListener('click', () => togglePlayPause(index, playButton));

        const timeBar = document.createElement('div');
        timeBar.classList.add('time-bar');
        const progress = document.createElement('div');
        progress.classList.add('progress');
        timeBar.appendChild(progress);

        listItem.appendChild(title);
        listItem.appendChild(playButton);
        listItem.appendChild(timeBar);

        playlistElement.appendChild(listItem);
    });
}

//fuunction to change play and pause
function togglePlayPause(index, button) {
    if (currentAudio && currentAudio.src === tracks[index].src && !currentAudio.paused) {
        currentAudio.pause();
        button.innerHTML = '<i class="fas fa-play"></i>';
        return;
    }

    if (currentAudio) {
        currentAudio.pause();
        clearInterval(intervalId);
        if (currentProgress) {
            currentProgress.style.width = '0';
        }
        const prevButton = document.querySelector('button[playing="true"]');
        if (prevButton) {
            prevButton.innerHTML = '<i class="fas fa-play"></i>';
            prevButton.removeAttribute('playing');
        }
    }

    currentAudio = new Audio(tracks[index].src);
    currentAudio.play();
    button.innerHTML = '<i class="fas fa-pause"></i>';
    button.setAttribute('playing', 'true');
    currentProgress = button.parentElement.querySelector('.progress');
    currentAudio.addEventListener('timeupdate', updateProgress);
    intervalId = setInterval(updateProgress, 500);
}

// Function to update progress bar
function updateProgress() {
    if (currentAudio && currentProgress) {
        const percentage = (currentAudio.currentTime / currentAudio.duration) * 100;
        currentProgress.style.width = percentage + '%';
    }
}

// Create the playlist on page load
createPlaylist();