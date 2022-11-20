var xhr = new XMLHttpRequest(); //new xml http request
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"); //adding countries link
xhr.send(); //sending the file to the server
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        let data = JSON.parse(this.response);
        //using filter function to get countries with asia as a region
        let info = data.filter((item) => item.region == 'Asia');
        for (let i = 0; i < info.length; i++) {
            console.log(`Name : ${info[i].name}`)
        }
//using filter function to get countries with population of less than 2 lakhs
        let pop = data.filter((item) => item.population < 200000)
        for (let i = 0; i < pop.length; i++) {
            console.log(`
            Name : ${pop[i].name}`);
        }
        //name, capital, flag using forEach function
        data.forEach((item) => {
                console.log(`
            Name : ${item.name}
            Capital : ${item.capital}
            Flag : ${item.flag}
            `)
            })
            //total population of countries using reduce function
        let popul = data.reduce((acc, item) => {
            return acc + item.name + ' ' + ':' + ' ' + item.population + "\n"
        })
        console.log(popul);
        //country which uses US Dollars as currency.
        let cur = data.filter((item) => ((item.currencies[0].code == 'USD') && (item.name != 'Antarctica')))
        for (let i = 0; i < cur.length; i++) {
            console.log(`
             Name : ${cur[i].name}
           `)
        }
} else { console.log(this.response); }
}