// import express from 'express';
// import cors from 'cors';
// import userRouter from './routes/user.routes';

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Route
// app.use('/api/users', userRouter);

// // Error handling
// app.use((err: any, _req: any, res: any, _next: any) => {
//   res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
// });

// export default app;


import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.routes';

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Pass the router here
app.use('/api/users', userRouter);

export default app;
