import Queue from '../queue/linked_list-based'

class Graph {
  vertexes = []
  edges = new Map()

  // 添加顶点
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

  // 初始化节点颜色
  initializeColor () {
    let colors = []
    for (let i = 0; i < this.vertexes.length; i++) {
       colors[this.vertexes[i]] = 'white';
    }
    return colors
  }

  bfs (initV, handler) {
    // 1. 初始化颜色
    let colors = this.initializeColor()

    // 2.创建队列
    let que = new Queue()

    // 3.将顶点加入到队列中
    que.enqueue(initV)

    // 4.循环从队列中取出元素，队列为空才停止
    while(!que.isEmpty()){
      // 4.1.从队列首部取出一个顶点
      let v = que.dequeue()

      // 4.2.从字典对象edges中获取和该顶点相邻的其他顶点组成的数组
      let vNeighbours = this.edges.get(v)

      // 4.3.将v的颜色变为灰色
      colors[v] = 'gray'

      // 4.4.遍历v所有相邻的顶点vNeighbours,并且加入队列中
      for (let i = 0; i < vNeighbours.length; i++) {
        const a = vNeighbours[i];
        // 判断相邻顶点是否被探测过，被探测过则不加入队列中；并且加入队列后变为灰色，表示被探测过
        if (colors[a] == 'white') {
          colors[a] = 'gray'
          que.enqueue(a)
        }
      }

      //4.5.处理顶点v
      handler(v)

      //4.6.顶点v所有白色的相邻顶点都加入队列后，将顶点v设置为黑色。此时黑色顶点v位于队列最前面，进入下一次while循环时会被取出
      colors[v] = 'black'
    }
  }

  dfs (initV, handler) {
    //1.初始化顶点颜色
    let colors = this.initializeColor()

    //2.从某个顶点开始依次递归访问
    this.dfsVisit(initV, colors, handler)
  }

  //为了方便递归调用，封装访问顶点的函数，传入三个参数分别表示：指定的第一个顶点、颜色、处理函数
  dfsVisit (v, colors, handler) {
    //1.将颜色设置为灰色
    colors[v] = 'gray'

    //2.处理v顶点
    handler(v)

    //3.访问V的相邻顶点
    let vNeighbours = this.edges.get(v)
    for (let i = 0; i < vNeighbours.length; i++) {
      let a = vNeighbours[i];
      //判断相邻顶点是否为白色，若为白色，递归调用函数继续访问
      if (colors[a] == 'white') {
        this.dfsVisit(a, colors, handler)
      }
      
    }

    //4.将v设置为黑色
    colors[v] = 'black'
  }

}

module.exports = Graph
