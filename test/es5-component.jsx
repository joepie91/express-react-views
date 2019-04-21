"use strict";

var React = require('react');
var PropTypes = require('prop-types');
var createClass = require('create-react-class');

var LocalsConsumer = require('../').LocalsContext.Consumer;

function countTo(n) {
	var a = [];
	for (var i = 0; i < n; i++) {
		a.push(i + 1);
	}
	return a.join(', ');
}

var Index = createClass({
	propTypes: {
		title: PropTypes.string,
	},

	render: function() {
		var self = this;

		return (
			<LocalsConsumer>{function(locals) {
				return (
					<div>
						<h1>{self.props.title}</h1>
						<p>Welcome to {locals.title}</p>
						<p>
							I can count to 10:
							{countTo(10)}
						</p>
					</div>
				);
			}}</LocalsConsumer>
		);
	},
});

module.exports = Index;
