function isValidHtml(htlm) {
    let isValid = true;
    let firstTags = [];
    let secondTags = [];
    let splitedValue = html.split(/<|>/).filter(item => item  != '');

    for (let tag of splitedValue){
	  /^\//i.test(tag) ? firstTags.push(tag) : secondTags.push(tag); 
    }

    boolResults = firstTags.map(firstTag => {
        firstTag = firstTag.slice(1);
        return firstTag === secondTags.filter(secondTag => secondTag === firstTag).join();
    });

    return isValid = !boolResults.some(item => item === false);
             
}