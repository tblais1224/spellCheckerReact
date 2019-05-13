
function spellCheckBackend(inputString, dictionaryData) {
    var inputArray = inputString.split(" ");
    var dbResults = [];
    inputArray.forEach(word => {
        var filteredWord = word.replace(/[^A-Za-z]/g, "").toLowerCase();
        dbResults.push(dictionaryData.findOne({ "word": filteredWord }));
    });
    return Promise.all(dbResults);
}

function outputSpellCheck(dbResults, inputString) {
    var apiResults = {
        resultArr: []
    };
    var i = 0;
    var inputArray = inputString.split(" ");
    var outputArr = [];
    
    dbResults.forEach(checkedWord => {
        if (checkedWord === null) {
            outputArr.push([inputArray[i] + " ", false]);
            i++;
        }
        else {
            outputArr.push([inputArray[i] + " ", true]);
            i++;
        }
    });
    apiResults = { resultArr: outputArr };
    return apiResults;
}

module.exports = {
    method: spellCheckBackend,
    otherMethod: outputSpellCheck
};