var someClass = function(lowerBound, upperBound){
	var filter = function(array) {
		outputArray = [];
		for(var i = 0; i < array.length; i++)
			if(array[i] > lowerBound && array[i] < upperBound) {
				outputArray.push(array[i]);
			}
	}
	
	var instance = {
		lowerBound: lowerBound,
		upperBound: upperBound
		filter: filter
	};


	return instance;
}