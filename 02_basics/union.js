var score = 33;
score = 44;
score = 'srikar';
var srikar = {
    name: 'srikar',
    isActive: false
};
// WORKING WITH FUNCTIONS : 
function getDbId(id) {
    return id;
}
getDbId(12345);
getDbId('12345');
function getNewDbId(id) {
    // here implicit checking should be done otherwiese there will be error. Remove the if condition and see the error. here ts is not sure whether id is number or string, so it forces us to check implicitly before doing any operation on the id
    if (typeof id === 'string') {
        id.toUpperCase();
        return;
    }
    return id + 2;
}
getNewDbId(12345);
getNewDbId('12345');
// WORKING WITH ARRAYS
var data = [1, 2, 3, 4, "5"];
