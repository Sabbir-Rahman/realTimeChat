import express from 'express';
// middlewares
import { encode } from '../middlewares/jwt.js';

//adding the encode middleware to our http://localhost:3000/login/:<user-id> [POST] route. If everything goes smoothly the user will get an authorization token.
const router = express.Router();

router
  .post('/login/:userId', encode, (req, res, next) => {
    return res
      .status(200)
      .json({
        success: true,
        authorization: req.authToken,
      });
  });

export default router;