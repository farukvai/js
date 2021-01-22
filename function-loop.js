

function largetstNumber(marks){
    var larger=0;
    for(var i=0; i<marks.length; i++){
        var element = marks[i];
        if(larger < element ){
            larger = element;
        }  
    }
    return larger;
}
var marks = [23,34,95,45,57,24,355];
lagestMark=largetstNumber(marks);
console.log(lagestMark);