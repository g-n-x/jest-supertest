import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
    console.log('you got it');
    res.json({message: 'success'});
});

export default router;
