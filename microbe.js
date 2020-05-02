const microbe = {
  init: (...tags) => tags.map(tag => window[tag] = (...params) => microbe.new(tag, params)),
  new(tag, params) {
    let node = document.createElement(tag);
    params.flat().map( param => {
      if (param.constructor==Object) {
        for (let attr in param) {
          node[attr] = param[attr]
        }
      } else {
        node.appendChild( param.after ? param : document.createTextNode(param) )
      }
    })
    return node
  }
}
