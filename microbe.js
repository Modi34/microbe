const microbe = (...tags) => {
  tags.map(tag => this[tag] = (...params) => {
    let node = document.createElement(tag);
    params.map( param => {
        param+'' == {} ? Object.assign(node, param) :
        param.call? param(node) :
        node.append( param )
    })
    return node
  })
}
