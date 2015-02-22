/**
 * FooController
 *
 * @description :: Server-side logic for managing foos
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

/**
 * blueprint shortcuts API
 * find::    /foo/find/:id or /foo/:id
 * create::  /foo/create?name=John
 * update::  /foo/update/:id?[query strings]
 * destroy:: /foo/destroy/:id
 */

/**
 * find where examples (http://sailsjs.org/#!/documentation/reference/blueprint-api/Find.html)
 * /foo?where={"name":{"contains":"abc"}}
 * /purchase?sort=createdAt DESC
 */

module.exports = {
  hi: function (req, res) {
    // this can access 'GET /foo/hi'
    return res.send("Hi there!");
  },

  good: function (req, res) {
    // sails has logging function
    sails.log.debug('[FooController::good]');
    // res.ok() can create view
    return res.ok({ data: 'Hello World' }, 'homepage');
  },

  /**
   * waterline example action
   */
  query: function(req, res) {
    // Any models can be accessed from anywhere in controllers with the model name.
    Foo.find({ where: { name: 'John' }, skip: 0, limit: 10, sort: 'name DESC' }).exec(function(err, data) {
      res.json(data);
    });
  },

  /**
   * waterline(with bluebird) example action
   * http://sailsjs.org/#!/documentation/reference/waterline/queries
   */
  bluebird: function(req, res) {
    Foo
      .find({ where: { name: 'John' }, skip: 0, limit: 10, sort: 'name DESC' })
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        sails.log.error(err);
        res.badRequest(err);
      });
  }
};
