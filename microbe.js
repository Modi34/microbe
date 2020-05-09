const microbe = (...tags) => {
  tags.map(tag => this[tag] = (...params) => {
    let node = document.createElement(tag);
    params.flat().map( param => {
        param.constructor==Object? Object.assign(node, param) :
        param.call? param(node) :
        node.appendChild( param )
    })
    return node
  })
}
