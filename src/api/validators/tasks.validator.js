exports.validateTask = (req, res, next) => {
    const { task } = req.body;

    if (!task?.description || !task?.title) {
        res.status(400).send('Description and title are required');
    }

    next();
}