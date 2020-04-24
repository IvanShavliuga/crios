var events = require('./events.js');
var users = require('./users.js');

exports.events = function (req, res) {
  res.json(events);
};

exports.event = function (req, res) {
  res.json(events[req.param.eventId]);
};

exports.users = function (req, res) {
  res.json(users);
}