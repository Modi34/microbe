let m=(...t)=>t.map((m,i,c)=>window[m]=(...p)=>(c=Object,i=document.createElement(m),p.flat().map(e=>e.constructor==c?c.assign(i,e):e.call?e(i):i.append(e)),i))
