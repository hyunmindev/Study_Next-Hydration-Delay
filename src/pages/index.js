import {useEffect} from 'react';

function sleep(ms) {
  const until = Date.now() + ms;
  let current = Date.now();
  while (current < until) {
    current = Date.now();
  }
}

export default function Home() {
  useEffect(() => {
    window.addEventListener('load', () => {
      console.log('window load');
    });
    document.addEventListener('DOMContentLoaded', () => {
      console.log('document DOMContentLoaded');
    });
  }, []);
  sleep(5000);
  return (
      <button
          type="button"
          onClick={() => console.log('click')}>
        button
      </button>
  );
}
