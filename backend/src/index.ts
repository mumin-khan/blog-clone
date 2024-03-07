import { Hono } from 'hono'
import userRouter from './routes/users'
import blogRouter from './routes/blogs'
import { auth } from './middleware'
import { cors } from 'hono/cors'

export type Bindings = {
  DATABASE_URL: string
  SECRET: string
}
const app = new Hono<{Bindings:Bindings}>()
app.use('/*',cors())
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/v1/api/users', userRouter)
app.use('/v1/api/blogs/*', auth)
app.route('/v1/api/blogs',blogRouter)


export default app
