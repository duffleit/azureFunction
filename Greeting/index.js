module.exports = function(context, req) {

    var name = req.query.name;

    conext.res = {
        body: "hello" + name,
        status: 400
    }

    context.done();
}