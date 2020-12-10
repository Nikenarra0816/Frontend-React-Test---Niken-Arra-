console.log(getAnagram(["kita", "atik", "tika", "aku", "kia", "makan", "kua"]));

function getAnagram(listString){
var resultString = [];
for (var i = 0; i<(listString.length); i++){
    if(i == 0){
        var stringText = [];
        stringText.push(listString[i]);
        resultString.push(stringText);
        continue;
    }
    var isAnagram = false;
    for (var l = 0; l<(resultString.length); l++){
        for (var j = 0; j<(resultString[l].length); j++){            
            if(checkAnagram(resultString[l][j], listString[i])){
                resultString[l].push(listString[i]);
                isAnagram = true;
                break;
            }
        }
        if (isAnagram) {
            break;
        }       
        if (l == resultString.length - 1) {
            stringText = [];
            stringText.push(listString[i]);
            resultString.push(stringText);
            break;
        }
    }
}
return resultString;
}

function checkAnagram(str1, str2){
    if (str1.length != str2.length) {
        return false;
    }

    var hash = new Object();
    for (var r in str1){
        var j = hash[String(str1[r])] ? hash[String(str1[r])] : 0 ;

        if (j == 0) {
            hash[String(str1[r])] = 1;
        } else {
            hash[String(str1[r])] = j + 1;
        }
    }

    for (var r in str2){
        var j = hash[String(str2[r])] ? hash[String(str2[r])] : 0 ;

        if (j == 0) {
            hash[String(str2[r])] = 1;
        } else {
            hash[String(str2[r])] = j + 1;
        }
    }    
    
    for (var value in hash){        
        if (hash[value] % 2 != 0) {
            return false;
        }
    }
    return true;
}