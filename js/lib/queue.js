Queue = new function() {
	var _stack = [];

	this.add = function(func, timeout) {
		_stack.push({f:func,t:timeout,h:null})
		
		return _stack.length-1;
	};
	this.push = this.add;
	this.append = this.add;

	this.insert = function(idx, func, timeout) {};
	
	this.remove = function(idx) {};
	
	this.pop = function() {};
	this.shift = function() {};

	this.reverse = function() {
		_stack.reverse()
	};
	this.swift = function(a,b) {
		var tmp = _stack[a];
		_stack[a] = _stack[b];
		_stack[b] = tmp;
	}

	this.run = function(timeout, complete) {
		var t = 0;
		
		if (timeout)
			t += t + timeout;

		while (_stack.length) {
			setTimeout(_stack[0].f, t += _stack[0].t);
			_stack.shift();
		}
		
		return true;
	};

	this.stop = function() {
		
	};
	
	this.isReady = function() {}
	this.isRunning = function() {}
};