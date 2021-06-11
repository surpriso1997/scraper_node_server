import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).json({ this: 'is home route' });
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
