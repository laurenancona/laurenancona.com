
	    L.mapbox.accessToken = 'pk.eyJ1IjoibGF1cmVuYW5jb25hIiwiYSI6IkNibGxlRWcifQ.ul9_tiHEKhj52QIfwYjoKA';
		  	// Construct a bounding box
				var southWest = L.latLng(39.864439, -75.387541),
		   			northEast = L.latLng(40.156325, -74.883544),
				    bounds = L.latLngBounds(southWest, northEast);

	     	var map = L.mapbox.map('map','laurenancona.mfi7pe33', {
	     		// set that bounding box as maxBounds to restrict moving the map (http://leafletjs.com/reference.html#map-maxbounds)
			    	maxBounds: bounds,
			    	maxZoom: 19,
			    	minZoom: 12
				});

	     	L.control.locate().addTo(map);

				map.fitBounds(bounds); // zoom/snap the map to that bounding box

				// Here be our data layers
				var districts = L.mapbox.featureLayer('laurenancona.jn22om7k'),
						blocks = L.mapbox.tileLayer('laurenancona.fc7871b8'),
						legend = map.legendControl.addLegend(document.getElementById('legend').innerHTML); // add legend		
						// lots			= L.mapbox.featureLayer('').addTo(map);
	    
	    // Layer control freak
	    L.control.layers({
		  	// 'Parking Dark': L.mapbox.tileLayer('laurenancona.mgb93lh3').addTo(map),
		  	// 'Parking Light': L.mapbox.tileLayer('laurenancona.fc7871b8')
		  	}, {
		  	'Permit Districts': districts ,
		  	'Permit Blocks': blocks.addTo(map)
		  	// 'Permit Lots': lots
			}, {
			position: 'topleft'
			}
			).addTo(map);	  		

	  		// UTF Grid interactivity, testing w/ multiple layers for Parkadelphia integration
				var blocksTiles = blocks.addTo(map);
				var blocksGrid 	= L.mapbox.gridLayer('laurenancona.fc7871b8').addTo(map); //,
		  	 		// lotsGrid 				= L.mapbox.gridLayer('laurenancona.fc7871b8').addTo(map);
				var blocksControl = L.mapbox.gridControl(blocksGrid	).addTo(map); //,
				 	// lotsControl  			=   L.mapbox.gridControl('laurenancona.fc7871b8').addTo(map);

				var hash = L.hash(map); // append (z)/(x)/(y) to URL for deep linking to locations

				map.setView([39.9547, -75.1695], 14);

			// ht @konklone for console.log-fication example
			// for sad, sad IE:
			  if (window._ie) {
					console.log("Through dangers untold."); 
					console.log("And hardships unnumbered."); 
					console.log("I have fought my way here to the castle; beyond the goblin city, to take back the child that you have stolen."); 
					console.log("My will is as strong as yours, and my kingdom as great...");
			  }

  			// otherwise, style it up:
			  else {
			    var styles = {
			      medium: "font-size: 10pt, font-weight: bold;color: #1B3B56",
			      medium_link: "font-size: 10pt; font-weight: bold; color: #027ea4",
			    };
			    console.log("%cThrough dangers untold.", styles.medium); 
					console.log("%cAnd hardships unnumbered.", styles.medium); 
					console.log("%cI have fought my way here to the castle; beyond the goblin city, to take back the child that you have stolen.", styles.medium); 
					console.log("%cMy will is as strong as yours, and my kingdom as great...", styles.medium);
			  }