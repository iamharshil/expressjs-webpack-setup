import * as express from 'express';
import { Request, Response } from 'express';
const app = express();
const {
    PORT = 3000,
} = process.env;
app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'hello world',
    });
});

app.get("/test", (req: Request, res: Response) => {
    return res.status(200).json({ message: "Success", data: [{ id: 1, name: "Jhon" }, { id: 2, name: "Doe" }, { id: 3, name: "Bruce" }, { id: "Theo" }] }).end();
})

if (require.main === module) { // true if file is executed
    app.listen(PORT, () => {
        console.log('server started at http://localhost:' + PORT);
    });
}
export default app;