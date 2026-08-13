import { Request, Response } from "express";

export function helloControler(_request: Request, response: Response): void {
  response.status(200).json({ message: "Hello World" });
}
