import  userRouter  from './user.router';
import  groupRouter  from './group.router';

const router = Object.assign({},userRouter, groupRouter);

export default router;
