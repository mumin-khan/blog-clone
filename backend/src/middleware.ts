import { verify } from "hono/jwt"

export const auth = async (c:any, next:any) => {

    const authHeader = c.req.header('Authorization')
   

        try {
            if (authHeader.startsWith('Bearer '))
            {
                const token = authHeader.split(' ')[1]
            const decodedPayload = await verify(token, c.env.SECRET)
            c.set('userId',decodedPayload.userId)
            await next()
            }

        }
        catch{
            return c.json("No Permission")
        }
    }
