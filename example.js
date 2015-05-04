var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function censor(inStr){
	for(idx in censoredWords){
		inStr = inStr.replace(censoredWords[idx], "****");
	}
	for (idx in customCensoredWords){
		inStr = inStr.replace(customCensoredWords[idx], "****");
	}
	return inStr;
}
function addCensoredWord(testword){
	customCensoredWords.push(testword);
}
function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;