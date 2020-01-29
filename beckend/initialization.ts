import sequelize  from './database-models/connection';
import express from 'express';

// Create a new express application instance
const app: express.Application = express();

const port = process.env.PORT || 3000;

sequelize.sync().then(async () => {
    app.listen(port, () =>
        console.log(`Example app listening on port ${port}!`),
    );
});

export default app;
