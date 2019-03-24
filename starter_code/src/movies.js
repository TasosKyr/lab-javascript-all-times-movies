/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    separateArray = movies.map(function(movie, i, movies) {
        return movie.duration.split(' ');
    });

    hoursArray = separateArray.map(function(movie, i, separateArray) {
        return movie[0].split('h');
    });

    hoursArray1 = hoursArray.map(function(el, i, hoursArray) {
        return parseFloat(el) * 60;
    });

    minutesArray = separateArray.map(function(movie, i, separateArray) {
        return movie[1].split('min');
    });

    minutesArray1 = minutesArray.map(function(el, i, minutesArray) {
        return parseFloat(el);
    });

    durationArray = [];
    for (i = 0; i < hoursArray1.length; i++) {
        durationArray.push(hoursArray1[i] + minutesArray1[i]);
    }

    finalArr = [];

    finalArr = [];

    for (i = 0; i < movies.length; i++) {
        finalArr.push(
            (newObj = {
                title: movies[i].title,
                year: movies[i].year,
                director: movies[i].director,
                duration: durationArray[i],
                genre: movies[i].genre,
                rate: movies[i].rate
            })
        );
    }
    console.log(finalArr);
}

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    let ratesArr = movies.map(function(el, i, movies) {
        return parseFloat(el.rate);
    });
    let rates = ratesArr.reduce(function(acc, sum) {
        return acc + sum;
    }, 0);
    let rates1 = rates / movies.length;
    let finalRate = parseFloat(rates1.toFixed(2));
    console.log(finalRate);
    return finalRate;
}

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramaArr = movies.filter(function(movie, i) {
        return movie.genre.includes('Drama');
    });
    if (dramaArr.length === 0) {
        return undefined;
    } else {
        let dramaRatesArr = dramaArr.map(function(movie, i, dramaArr) {
            if (!movie.rate) {
                return 0;
            }
            return parseFloat(movie.rate);
        });
        let dramaRates = dramaRatesArr.reduce(function(acc, sum) {
            return acc + sum;
        }, 0);
        let dramaRates1 = dramaRates / dramaArr.length;
        let finalDramaRate = parseFloat(dramaRates1.toFixed(2));
        console.log(finalDramaRate);
        return finalDramaRate;
    }
}

// Order by time duration, in growing order

function orderByDuration(finalArr) {
    let newOrder = finalArr.sort(function(a, b) {
        if (a.duration > b.duration) {
            return 1;
        } else if (a.duration < b.duration) {
            return -1;
        } else {
            {
                if (a.name > b.name) {
                    return -1;
                } else {
                    return 1;
                }
            }
        }
    });
    console.log(newOrder);
}
orderByDuration(finalArr);

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
    let dramaArr = movies.filter(function(movie, i) {
        return movie.genre.includes('Drama');
    });
    let SpielbMovs = dramaArr.filter(function(el, i) {
        return el.director === 'Steven Spielberg';
    });
    if (dramaArr.length === 0) return undefined;
    else return `Steven Spielberg directed ${SpielbMovs.length} drama movies!`;
}
// Order by title and print the first 20 titles

function orderAlphabetically(finalArr) {
    let newOrder1 = finalArr.sort(function(a, b) {
        if (a.name < b.name) {
            return 1;
        } else {
            return -1;
        }
    });
    newOrder2 = [];
    for (i = 0; i <= 20; i++) {
        newOrder2.push(newOrder1[i]);
    }
}

// Best yearly rate average
