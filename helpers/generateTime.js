var moment = require('moment');

module.exports = function(timestamp){
	if(moment.unix(timestamp).isValid()){
		return{
			unix:timestamp,
			natural:moment.unix(timestamp).format('MMMM DD, YYYY')
		}
	}else if(moment(timestamp).isValid()){
		return{
			unix:moment(timestamp).unix(),
			natural:moment.unix(moment(timestamp).unix()).format('MMMM DD, YYYY')
		}
	}else{
		return {
			unix:null,
			natural:null
		}	
	}
}