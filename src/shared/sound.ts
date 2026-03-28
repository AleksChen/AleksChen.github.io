const INTERACTIVE_SELECTOR = 'a, button';
const POOL_SIZE = 3;
const VOLUME = 0.3;

const pool: HTMLAudioElement[] = [];
let index = 0;

for (let i = 0; i < POOL_SIZE; i++) {
  const audio = new Audio('/sounds/click.mp3');
  audio.preload = 'auto';
  audio.volume = VOLUME;
  pool.push(audio);
}

function play() {
  const audio = pool[index % POOL_SIZE];
  index++;
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.addEventListener('click', (e: MouseEvent) => {
    if (!(e.target instanceof Element)) return;
    if (e.target.closest(INTERACTIVE_SELECTOR)) play();
  }, true);
}
