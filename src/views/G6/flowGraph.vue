<template>
  <!--   第一步创建容器-->
  <div id="container"></div>
</template>

<script>
import { Graph } from '@antv/x6'
import { onMounted } from "vue";

// 准备数据
const data = {
  // 2-1: 定义节点数据
  nodes: [
    {
      id: 'node1',// 节点唯一标识
      x: 0,
      y: 0,
      width: 80,
      height: 40,
      label: 'hello'
    },
    {
      id: 'node2',// 节点唯一标识
      x: 160,
      y: 180,
      width: 80,
      height: 40,
      label: 'world'
    }
  ],
  // 2-2: 定义边数据
  edges: [
    {
      source: 'node1',
      target: 'node2'
    }
  ]
}

export default {
  name: "flowGraph",
  setup () {
    let graph = null
    onMounted(() => {
      graph = new Graph({
        container: document.getElementById('container'),
        width: 2000,
        height: 600,
        grid: true
      })
      graph.fromJSON(data)
    })
  }
}
</script>

<style scoped>

</style>
