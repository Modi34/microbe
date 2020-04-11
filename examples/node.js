const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { document } = (new JSDOM()).window;
var window = global;

let m=(...t)=>{t.map(e=>window[e]=(...p)=>n(e,p));let n=(t,p,a,d=document)=>(t=d.createElement(t),p.map(e=>{if((a=e.blur)||e.big){t.appendChild(a?e:d.createTextNode(e))}else for(a in e)t[a]=e[a]}),t)}

m('DIV', 'A', 'B', 'UL', 'LI', 'I', 'H1', 'style', 'script');

console.log(

DIV(
  H1('Microbe.js'),
  UL({ id: 'menu' },
    LI('tiny (', B('200 bytes'), ')'),
    LI('simple'),
    LI('powerfull', { onclick: e => alert('hi') })
  ),
  '...',
  A({ href: 'https://github.com', target: 'blank' }, 'check it out'),
  style(`h1{color:red}`),

script(`
  let menu = document.getElementById('menu');
  menu.children[2].textContent = 'VERY powerfull'
`)

)

)