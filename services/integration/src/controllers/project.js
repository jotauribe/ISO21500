//routes
const test = (req, res) => {
    const { id } = req.params;
    const { active } = req.query;
    res.send({ message: id, active });
};

const createProject = (req, res) => {
    let params = req.body;

    params.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Project Created successfully')
    })

};


module.exports = { test, createProject }
