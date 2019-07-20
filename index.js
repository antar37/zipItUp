let downloadArray = [];
jQuery(document).ready(function(){
   
jQuery(".download-link").click(function(e){
   console.log("function fired");
  e.preventDefault();
  currentLink = e.currentTarget.getAttribute('href');
  downloadArray.push(currentLink);
  console.log(downloadArray);
});

jQuery("#downloadAll").click(function(e){
   e.preventDefault();
   jQuery.ajax({
      method: "POST",
      url: "http://localhost/test/wp-content/plugins/zipItUp/zipper.php",
      data: { 
        filestoZip: downloadArray,
      }
    })
      .done(function( msg ) {
        alert( "Data Saved: " + msg );
        window.location = e.currentTarget.getAttribute('href');
      });
 });
});


