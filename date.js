const log = console.log;
let days = 10;

var myDate = new Date();

log('myDate = ',myDate);


function makeNewDateFromReference(daysOffset, referenceDate) {
	return new Date (referenceDate.setTime(referenceDate.getTime() + daysOffset * 86400000 )); 
}

function makeNewDate(daysOffset) {
	return new Date (new Date().setTime(new Date().getTime() + daysOffset * 86400000));
}

log('newDate w/ func = ',makeNewDateFromReference(10,myDate)); 
// should log 10 days ahead unless you change the value of myDate

log('newDate w/ func = ',makeNewDate(2));
// should log 2 days ahead

// Day time savings edge cases not taken into account