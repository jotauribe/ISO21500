//routes
const test = (req, res)=>{
    const { id } = req.params;
    const {active} = req.query;
    res.send({message: id, active});
};

module.exports = {test}
