// Add a schema tag to your
   $.getJSON( "https://cdn.jsdelivr.net/gh/bursalampung/js/lpg7.json", function( data ) {
     $( "<script/>", {
       "type": "application/ld+json",
       "html": JSON.stringify(data)
     }).appendTo( "head" );
   });
