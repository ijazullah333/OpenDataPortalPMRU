
var most_view = [];
var display_name = [];
function display_charts(most_view,display_name) 
{



  
        new Chart(document.getElementById("piechart"), {
        type: 'pie',
        data: {
          labels: display_name,
          datasets: [{
            label: "Number of Views",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: most_view
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
          }
        }
    });
    

    new Chart(document.getElementById("bar-chart-horizontal"), {
        type: 'horizontalBar',
        data: {
          labels: display_name,
          datasets: [
            {
              label: "Number of Views",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: most_view 
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
          }
        }
    });

  }

    


		
		const p = "https://cors-anywhere.herokuapp.com/"; 
		$(document).ready(function(){
                $.ajax({
                    url: `${p}https://demo.ckan.org/api/action/package_search?facet.field=[%22tags%22]&facet.limit=10&rows=0`,
                    
                    success: function(dataWeGotViaJsonp){
                    	//alert(dataWeGotViaJsonp);
                    	console.log(dataWeGotViaJsonp);
                    	console.log(dataWeGotViaJsonp.result.search_facets.tags.items[0]);
                    	// $("#opt").html(dataWeGotViaJsonp.result.search_facets.tags.items[0].count);
                       $.each(dataWeGotViaJsonp.result.search_facets.tags.items, function(index, val) {
                       	 /* iterate through array or object */
                       	 console.log(val.count + " : "+ val.display_name );
                       	 most_view.push(val.count);
                       	 display_name.push(val.display_name);
                       });
                      // alert(c);
                       //alert(dname);
                       display_charts(most_view,display_name);
                      //  console.log(most_view);
                      //  console.log(display_name);
                    }

                });

            });
		