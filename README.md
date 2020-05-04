# microbe

## [Demo on jsfiddle](https://jsfiddle.net/Modi34/6g3ew7n1/30/).

### How to use:
1.	Paste minified source into your code
```javascript
let m=(...t)=>t.map((t,a,n,d=document,x=(e,n)=>{for(a in e)z(e[a])?x(e[a],n[a]):n[a]=e[a]},z=e=>e.constructor==Object)=>window[t]=(...p)=>(n=d.createElement(t),p.flat().map(e=>z(e)?x(e,n):e.call?e(n):n.appendChild(e.after?e:d.createTextNode(e))),n))
```
2.	Call m function to declare tags you need
```javascript
m('DIV', 'A', 'B', 'UL', 'LI', 'I', 'H1');
```
3.	Than it should work
```javascript
A({ href: 'http://m' }, 'hello world',
    B('bold', I('and italic'))
)
```

### Few things to note:

You can use lower case 
```javascript
m('div', 'a', 'b', 'ul', 'li', 'i', 'h1');
```

functions generated by m() always return a dom node

you can use as many params as you need and they can be added in any order

arrays are flattened - 
```javascript
div(['hello', ' ', world], ' some text') == <div>hello world some text</div>
```
objects are parsed and key => value is set to newly created dom element -
```javascript
div({id: 'test'}) == <div id="test"></div>
```
functions will be called with current node as parameter
```javascript
div(node=>node.dataset.id='test') == <div data-id="test"></div>
```
any other type will produce a textNode (string, int, bool etc) - 
```javascript
div(true, 7) == <div>true7</div>
```

## [Demo on jsfiddle](https://jsfiddle.net/Modi34/6g3ew7n1/30/).
