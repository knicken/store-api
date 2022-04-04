module.exports.setup = (app) => {
    /**
     * @swagger
     * /:
     *   get:
     *     description: Returns the homepage
     *     responses:
     *       200:
     *         description: hello world
     */
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
};
