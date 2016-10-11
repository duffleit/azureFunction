module.exports = function(context, req) {

    var name = req.query.name;

    conext.res = "hello" + name;
}