function pairProgramming(experiences, mostExperienced){
    currentXp = experiences.join("").split(',').join('');
    experiences.sort();

    if (mostExperienced) {
        experiences = experiences.slice(-2);
         return [currentXp.indexOf(experiences[0]), currentXp.indexOf(experiences[1])]
    }  else {
        experiences = experiences.slice(1);
        return [currentXp.indexOf(experiences[0]), currentXp.indexOf(experiences[1])]
    }
    
}