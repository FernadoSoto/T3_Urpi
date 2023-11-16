const audio = document.getElementById('audio');
        const playPauseButton = document.getElementById('play-pause');
        const greenWave = document.getElementById('green-wave');
        
        playPauseButton.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playPauseButton.innerHTML = "&#10074;&#10074;";
                animateWave();
            } else {
                audio.pause();
                playPauseButton.innerHTML = "&#9658;";
                cancelAnimationFrame(animationFrame);
            }
        });

        let animationFrame;

        function animateWave() {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const analyser = audioContext.createAnalyser();
            const source = audioContext.createMediaElementSource(audio);
            source.connect(analyser);
            analyser.connect(audioContext.destination);
            analyser.fftSize = 256;
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            
            function drawWave() {
                analyser.getByteFrequencyData(dataArray);
                const sum = dataArray.reduce((acc, value) => acc + value, 0);
                const average = sum / dataArray.length;
                greenWave.style.width = `${average}%`;
                animationFrame = requestAnimationFrame(drawWave);
            }

            drawWave();
        }