
class Graph {
  vertexes = []
  edges = new Map()

  // 添加定点
  addVertex (v) {
    if (this.vertexes.indexOf(v) !== -1) { return; }
    this.vertexes.push(v)
    this.edges.set(v, [])
  }

  // 添加边
  addEdge (v1, v2) {
    this.edges.get(v1).push(v2)
    this.edges.get(v2).push(v1)
  }

  toString () {
    let resultString = ""

    for (let i = 0; i < this.vertexes.length; i++) { // 遍历所有顶点
      resultString += this.vertexes[i] + '-->'
      let vEdges = this.edges.get(this.vertexes[i])
      for (let j = 0; j < vEdges.length; j++) { // 遍历每个顶点对应的数组
        resultString += vEdges[j] + '  ';
      }
      resultString += '\n'
    }
    return resultString
  }

}
