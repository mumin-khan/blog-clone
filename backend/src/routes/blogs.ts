import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { timing } from 'hono/timing'
import { Bindings } from '../index'
import { createBlog, updateBlog } from '@mumin00/common'

const blogRouter = new Hono<{Bindings:Bindings,Variables:{
    userId:string
}}>()

blogRouter.get('/test',async (c)=>{
    return c.json("lop")
})

blogRouter.post('/create',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      
      }).$extends(withAccelerate())
    const body = await c.req.json()

    const userId = c.get('userId')
    const {success} = createBlog.safeParse(body)
    if(!success)
    {
        c.status(400);
		return c.json({ error: "invalid input" });
    }
   

        const post  =  await prisma.blog.create({
            data:{
                title:body.title,
                content: body.content,
                authorId :userId
            },
            select:{
                title:true,
                content:true,
            }
             
        })
        return c.json(post)


})
blogRouter.get('/',async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      
      }).$extends(withAccelerate())
   const posts =  await prisma.blog.findMany({
        include: { author: true }})

    return c.json(posts)
})
blogRouter.get('/:id',async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      
      }).$extends(withAccelerate())
    const postId = c.req.param('id')
   const posts =  await prisma.blog.findUnique({
        where:{id:postId},
        include: { author: true }})

    return c.json(posts)
})

blogRouter.delete('/:id',async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      
      }).$extends(withAccelerate())
    const postId = c.req.param('id')
   const deletedPost = await prisma.blog.delete({
        where:{id:postId}
   })
    return c.json(deletedPost)
})

blogRouter.put('/:id',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      
      }).$extends(withAccelerate())
    const body = await c.req.json()
    const postId = c.req.param('id')
    const {success} = updateBlog.safeParse(body)
    if(!success)
    {
        c.status(400);
		return c.json({ error: "invalid input" });
    }
   
        let updateData
        :{
            title?:string,
            content?:string,
            published?:boolean

        } 
         = {}
        if (body.title)
        {
            updateData["title"] = body.title
        }
        if (body.content)
        {
            updateData["content"] = body.content
        }
        if (body.published)
        {
            updateData["published"] =true
                
        }
      

    console.log(updateData)
        const updatedPost = await prisma.blog.update({
            where: { id:postId },
            data: updateData,
            select:{
                title:true,
                content:true,
            }
          })
          return c.json(updatedPost)

    })    
export default blogRouter
