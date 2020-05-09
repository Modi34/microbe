m=(i,c,r=Object)=>i.map(t=>this[t]=(...p)=>(c=document.createElement(t),p.map(a=>a.constructor==r?r.assign(c,a):a.call?a(c):c.append(a)),c))
