const Sounds = {
    sounds: {},
    init() {
        const list = ['click', 'swap', 'explode', 'combo', 'win'];
        list.forEach(name => {
            const audio = new Audio(`assets/sounds/${name}.mp3`);
            audio.preload = 'auto';
            this.sounds[name] = audio;
        });
    },
    play(name) {
        if (this.sounds[name]) {
            this.sounds[name].currentTime = 0;
            this.sounds[name].play().catch(() => {});
        }
    }
};
Sounds.init();
function playSound(name) { Sounds.play(name); }
