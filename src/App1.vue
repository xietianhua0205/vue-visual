<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
  <button @click="deleteBooks(2)">删除图书</button>
  <div
      class="static"
      :class="[{active: isActive},'errorClass']"
  >
    点击查看我的class名称吧
  </div>
  <ul>
    <li v-for="item in items" :key="item.message">{{ item.message }}</li>
  </ul>
  <ul>
    <li v-for="(value, key, index) in myObject" :key="index">
      {{ index }}. {{ key }}: {{ value }}
    </li>
  </ul>
  <span v-for="n in 10" :key="n">{{ n }}</span>
  <p>
    Ask a yes/no question:
    <input v-model="question"/>
  </p>
  <p>{{ answer }}</p>
  <button @click="addAge">加一岁</button>
  <div>{{ testWatchObj.name }}:{{ testWatchObj.age }}</div>
  <input type="text" ref="input">
  <p>single File Component--S F C -- 单文件组件</p>
  <div :style="{fontSize:postFontSize +'em'}">
    <blog-post title="My journey with Vue" @enlarge-text="postFontSize += 0.1">
      这是组件的测试内容不用在意
    </blog-post>
  </div>
  <HelloWorld></HelloWorld>
  <CustomInput v-model="message"></CustomInput>{{ message }}
</template>

<script>
// import data from './data.json'
import BlogPost from './BlogPost';
import CustomInput from './CustomInput';
import { reactive, ref } from '@vue/reactivity';
import { computed, watch, onMounted, watchEffect } from 'vue';

export default {
  name: 'App',
  components: { BlogPost, CustomInput },
  setup () {
    const author = reactive({
      name: 'John Doe',
      books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
      ]
    })
    const input = ref(null)
    const isActive = ref(true)
    const hasError = ref(false)
    const question = ref('')
    const answer = ref('Questions usually contain a question mark. ;-)')
    const testWatchObj = reactive({
      name: 'zhangsan',
      age: 17,
    })

    watch(question, async (newQuestion) => {
      if (newQuestion.indexOf('?') > -1) {
        answer.value = 'Thinking...'
        try {
          const res = await fetch('https://yesno.wtf/api')
          answer.value = (await res.json()).answer
        } catch (error) {
          answer.value = 'Error! Could not reach the API. ' + error
        }
      }
    })

    // watch 需要注意点，不可以直接
    // watch(testWatchObj, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // })
    // watch(
    //     () => testWatchObj.name,
    //     (value, oldValue) => {
    //       console.log(value, oldValue)
    //     },
    //     { deep: true }
    // )
    watchEffect(() => {
      console.log('watchEffect')
    })
    onMounted(() => {
      input.value.focus()
      console.log('onMounted')
    })

    function deleteBooks () {
      author.books = []
    }

    function addAge () {
      testWatchObj.age++
    }

    const publishedBooksMessage = computed(() => {
      return author.books.length > 0 ? 'Yes' : 'No'
    })
    const items = [{ message: 'Foo' }, { message: 'bar' }]
    const myObject = reactive({
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10',
      name: 'test',
      '1': 22323,
      '姓名': '名字'
    })
    const postFontSize = ref(1)
    const message = ref('hello')
    return {
      message,
      author,
      publishedBooksMessage,
      deleteBooks,
      isActive,
      hasError,
      items,
      myObject,
      question,
      answer,
      testWatchObj,
      addAge,
      input,
      postFontSize
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
