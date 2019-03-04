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

const listProject = (req, res) => {
    let projectId = req.params.id;
    Project.findById(projectId, function (err, project) {
        if (err) return next(err);
        res.send(project);
    })


};
const listProjects = (req, res) => {
   


};




const deleteProject = (req, res) =>{



};



module.exports = { test, createProject , listProject ,listProjects, deleteProject }
