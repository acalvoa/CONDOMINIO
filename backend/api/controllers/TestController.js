/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `TestController.index()`
   */
  index: function (req, res) {
    return res.json({
      todo: req.session.authenticated
    });
  }
};

