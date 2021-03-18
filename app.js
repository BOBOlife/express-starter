const express = require('express')
const logger = require('./logger')

const app = express()
const port = 3000

app.use(logger('dev:'))
app.use((request, response, next) => {
  if (request.path === '/' && request.method === 'get') {
    response.send('根目录')
  }
  next()
})
app.get('/xxx', (request, response, next) => {
  response.send('xxx 页面')
  next()
})

app.route('/zzz')
  .get((request, response, next) => {
    response.send('zzz')
  })
  .post()

app.listen(port, () => {
  console.log(`正在监听端口:${port}`)
})
