async function getAds() {
    const url = 'https://geekhub-frontend-js-9.herokuapp.com/api/ads/week';
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(url, {

            method: 'GET',
            headers: {
                'x-access-token': `${token}`,
                'Content-Type': 'application/json',
            },

        });
        console.log(response);

        let result = await response.json();
        console.log(result);
        function createDataTable(array) {
            let table = $('data-table').DataTable({
                scrollY:        200,
                deferRender:    true,
                scroller:       true
            });
            let i;
            let numberCompain = result.length;
            for (i=0; i<=numberCompain; ) {
                let name = result[i].name;
                let time = result[i].time;
                let views = result[i].views;
                let visitors = result[i].visitors;
                let ctr = result[i].ctr;
                let cpc = parseFloat(result[i].cpc).toFixed(2);
                let cpv = parseFloat(result[i].cpv).toFixed(2);
                let cpm = parseFloat(result[i].cpm).toFixed(2);
                let status = result[i].status;
                i++;
                $('#addr' + i).html("<td>" + name + "</td><td>" + time + "</td><td>" + views + "</td><td>" + visitors + "</td><td> "
                    + ctr + "</td><td>" + cpc + "</td><td>" + cpv + "</td><td>" + cpm + "</td><td>" + status + "</td>");
                $('table').append('<tr id="addr' + (i) + '"></tr>');
            }


        }
        createDataTable(result);
        alert(response.status);

    } catch (error) {
        console.log(error);
    }
}
document.getElementById("page-graph").addEventListener("click", function (event) {
    event.preventDefault();
    getAds();

});



