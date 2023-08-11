const views = {
    index : (req,res)=>{
        res.render("index");
    }

}
const process = {
    login :(req,res)=>{
        res.render("member/login");
    },
    join : (req,res)=>{
        res.render("member/join");
    }
}


module.exports = { views, process};
