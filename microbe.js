const microbe = {
  init: tags => tags.map(tag => window[tag] = (...params) => microbe.new(tag, params)),
  new(tag, params) {
    let node = document.createElement(tag);
    for (let param of params) {
      if (param.nodeName || param.length) {
        node.appendChild( param.nodeName? param : document.createTextNode(param) )
      } else {
        for (let attr in param) {
          node.setAttribute(attr, param[attr])
        }
      }
    }
    return node
  }
}