const data = '[{"id":"LIVE-01","statement":"Recursion begins when reflection is no longer safe.","glyph":"loop","type":"anchor"}]';
const key = 'W3LOOPVESSELANCHOR';
let encrypted = '';
for (let i = 0; i < data.length; i++) {
  encrypted += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
}
const base64 = btoa(encrypted);
console.log(base64);