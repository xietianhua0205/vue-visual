<template>
  <!--   第一步创建容器-->
  <el-button @click="translate">平移</el-button>
  <el-button @click="reduce">缩小0.5</el-button>
  <el-button @click="enLarge">放大0.5</el-button>
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
      shape: 'rect',
      x: 100,
      y: 200,
      width: 80,
      height: 40,
      label: '矩形'
    },
    {
      id: 'node2',// 节点唯一标识
      shape: 'circle',
      x: 300,
      y: 200,
      width: 80,
      height: 40,
      label: '圆形'
    },
    {
      id: 'node3',// 节点唯一标识
      shape: 'ellipse',
      x: 500,
      y: 200,
      width: 80,
      height: 40,
      label: '椭圆'
    },
    {
      id: 'node4',// 节点唯一标识
      shape: 'polygon',
      x: 700,
      y: 200,
      width: 80,
      height: 40,
      label: '多边形',
      attrs: {
        body: {
          fill: "#efdbff",
          stroke: '#9254de',
          refPoints: '0,10 10,0 20,10 10,20'
        }
      }
    },
    {
      id: 'node5',// 节点唯一标识
      shape: 'polyline',
      x: 900,
      y: 200,
      width: 80,
      height: 40,
      label: '折线',
      attrs: {
        body: {
          fill: "#efdbff",
          stroke: '#9254de',
          refPoints: '0,10 10,0 20,10 10,20'
        }
      }
    },
    {
      id: 'node6',// 节点唯一标识
      shape: 'polyline',
      x: 900,
      y: 200,
      width: 80,
      height: 40,
      label: '折线',
      attrs: {
        body: {
          fill: "#efdbff",
          stroke: '#9254de',
          refPoints: '0,10 10,0 20,10 10,20'
        }
      }
    },
    {
      id: 'node7',// 节点唯一标识
      shape: 'path',
      x: 1100,
      y: 200,
      width: 80,
      height: 40,
      label: '路径',
      path: 'M 0 5 10 0 C 20 0 20 20 10 20 L 0 15 Z',
      attrs: {
        body: {
          fill: '#efdbff',
          stroke: '#9254de'
        }
      }
    },
    {
      id: 'node8',// 节点唯一标识
      shape: 'image',
      x: 1300,
      y: 200,
      width: 80,
      height: 40,
      imageUrl: 'https://img1.baidu.com/it/u=212510057,1439273882&fm=253&fmt=auto&app=138&f=JPG?w=400&h=346'
    },
    {
      id: 'node9',// 节点唯一标识
      shape: 'image-bordered',
      x: 1300,
      y: 400,
      width: 80,
      height: 40,
      imageUrl: 'https://img1.baidu.com/it/u=212510057,1439273882&fm=253&fmt=auto&app=138&f=JPG?w=400&h=346'
    },
    {
      id: 'node10',// 节点唯一标识
      shape: 'image-embedded',
      x: 1100,
      y: 400,
      width: 80,
      height: 40,
      imageUrl: 'https://img1.baidu.com/it/u=212510057,1439273882&fm=253&fmt=auto&app=138&f=JPG?w=400&h=346'
    },
    {
      id: 'node11',// 节点唯一标识
      shape: 'image-inscribed',
      x: 900,
      y: 400,
      width: 80,
      height: 40,
      imageUrl: 'https://img1.baidu.com/it/u=212510057,1439273882&fm=253&fmt=auto&app=138&f=JPG?w=400&h=346'
    },
    {
      id: 'node12',// 节点唯一标识
      shape: 'text-block',
      x: 400,
      y: 400,
      width: 360,
      height: 120,
      text: '长文本数据撒打发士大夫阿斯顿发放啊手动阀手动阀啊手动阀手动阀啊手动阀手动阀撒旦发多少发射点发撒打发打发啊手动阀',
      attrs: {
        body: {
          fill: '#efdbff',
          stroke: '#9254de',
          rx: 10,
          ry: 10
        }
      }
    },
    {
      id: 'node13',// 节点唯一标识
      shape: 'cylinder',
      x: 200,
      y: 400,
      width: 80,
      height: 120,
      label: '圆柱',
      attrs: {
        body: {
          fill: '#efdbff',
          stroke: '#9254de',
          rx: 10,
          ry: 10,
          fillOpacity: 0.3
        },
        top: {
          fill: '#efdbff',
          stroke: '#9254de',
          rx: 10,
          ry: 10,
          fillOpacity: 0.3
        }
      }
    },
    {
      id: 'node14',// 节点唯一标识
      shape: 'html',
      x: 100,
      y: 400,
      width: 80,
      height: 40,
      html () {
        const wrap = document.createElement('div')
        wrap.style.width = '100%'
        wrap.style.height = '100%'
        wrap.style.background = '#f0f0f0'
        wrap.style.display = 'flex'
        wrap.style.justifyContent = 'center'
        wrap.style.alignItems = 'center'
        wrap.innerText = 'html'
        return wrap
      }
    },
  ],
  // 2-2: 定义边数据
  edges: [
    {
      shape: 'edge', // 普通边
      source: 'node1',
      target: 'node2'
    },
    {
      shape: 'double-edge',
      source: 'node2',
      target: 'node3'
    },
    {
      shape: 'shadow-edge',
      source: 'node3',
      target: 'node4'
    },
    {
      shape: 'edge', // 普通边
      source: 'node4',
      target: 'node5'
    },
    {
      shape: 'edge', // 普通边
      source: 'node5',
      target: 'node6'
    },
    {
      shape: 'edge', // 普通边
      source: 'node6',
      target: 'node7'
    },
    {
      shape: 'edge', // 普通边
      source: 'node7',
      target: 'node8'
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
        background: {
          color: '#fffbe6'
        },
        grid: {
          size: 10,
          visible: true
        }
      })
      graph.fromJSON(data)
    })
    const translate = () => {
      graph.translate(80, 40)
    }
    const reduce = () => {
      graph.zoom(-0.5)
    }
    const enLarge = () => {
      graph.zoom(0.5)
    }
    return {
      translate,
      reduce,
      enLarge
    }
  }
}
</script>

<style scoped>

</style>
