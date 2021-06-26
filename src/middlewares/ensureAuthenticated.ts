import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");


    try {
        const { sub } = verify(token, "5bc98ac35493f5b2424f4070b8e8df56") as IPayload;
        request.user_id = sub;
        return next();
    } catch (err) {
        return response.status(401).end();
    }
}