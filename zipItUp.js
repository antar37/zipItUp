let downloadArray = [];
jQuery(document).ready(function(){

jQuery(".download-link").click(function(e){
  e.preventDefault();
  jQuery(e.currentTarget).toggleClass("ZIP-selected-link");
  currentLink = e.currentTarget.getAttribute('href');

  // Check for the existence of the link in the array. If it's there, remove it. If it's not, add it.
  if(downloadArray.indexOf(currentLink) >= 0){
    downloadArray.splice(downloadArray.indexOf(currentLink), 1);
  } else {
    downloadArray.push(currentLink);
  }
  console.log(downloadArray);
  // If there is not an array item at 0, hide the download link. If it's not empty, show it.
  if(downloadArray[0]){
    jQuery("#downloadSelected").show();
  } else {
    jQuery("#downloadSelected").hide();
  }
});

jQuery("#downloadSelected").click(function(e){
    e.preventDefault();
    jQuery.ajax({
      method: "POST",
      url: zipItUp.pluginsUrl + "/zipper.php",
      data: { 
        filestoZip: downloadArray,
      }
    })
    .done(function() {
      alert( "Congratulations! Click OK to download ZIP." );
      window.location = e.currentTarget.getAttribute('href');
    });
  });
});


