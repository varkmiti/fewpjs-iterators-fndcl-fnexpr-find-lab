function superbowlWin(array) { 
    let ans = array.find(element => element.result === 'W');
    return !!ans ? ans.year :undefined;
}