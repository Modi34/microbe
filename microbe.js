const microbe = {
  init: (...tags) => tags.map(tag => window[tag] = (...params) => microbe.new(tag, params)),
  new(tag, params) {
    let node = document.createElement(tag);
    params.flat().map( param => {
      if (param.constructor==Object) {
        microbe.parse(param, node)
      } else {
        param.call? param(node) :
        node.appendChild( param.after ? param : document.createTextNode(param) )
      }
    })
    return node
  },
  parse(obj, node){
    for(let i in obj){
     if(obj[i].constructor == Object){
      microbe.parse(obj[i], node[i])
     }else{
      node[i] = obj[i]
     }
    }
   }
}
