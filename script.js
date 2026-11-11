const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  const pad = n => String(n).padStart(2, '0');

  function tick() {
    const now  = new Date();
    let   h    = now.getHours();
    const m    = now.getMinutes();
    const s    = now.getSeconds();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;

    document.getElementById('hrs').textContent   = pad(h);
    document.getElementById('mins').textContent  = pad(m);
    document.getElementById('secs').textContent  = pad(s);
    document.getElementById('ampm').textContent  = ampm;

    const d = now;
    document.getElementById('date-bar').innerHTML =
      `${days[d.getDay()]} <span>/</span> ${pad(d.getDate())} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  tick();
  setInterval(tick, 1000);