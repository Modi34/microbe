const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { document } = (new JSDOM()).window;
var window = global;

let m=(...t)=>t.map(t=>window[t]=(...p)=>((n,a,d=document)=>(n=d.createElement(t),p.flat().map(e=>{if(e.constructor==Object){for(a in e)n[a]=e[a]}else n.appendChild(e.after?e:d.createTextNode(e))}),n))())

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
