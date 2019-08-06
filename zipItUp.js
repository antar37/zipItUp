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

  });

  jQuery(".downloadSelected").click(function(e){
    e.preventDefault();
    jQuery.ajax({
      method: "POST",
      url: zipItUp.pluginsUrl + "/zipper.php",
      data: { 
        filestoZip: downloadArray,
      }
    })
    .done(function() {
      const confirmBox = confirm('Click OK to download ZIP');
      if(confirmBox){
        window.location = e.currentTarget.getAttribute('href');
      }
    });
  });

  jQuery(".cancelSelected").click(function(e){
    e.preventDefault();
    jQuery(".download-link").removeClass("ZIP-selected-link");
    downloadArray = [];

  });

  jQuery(".selectAll").click(function(e){
    e.preventDefault();
    //Clear the array
    downloadArray = [];
    //Get all links
    let allLinks = document.querySelectorAll('.download-link');

    allLinks.forEach(function(link){
      //Only get the visible ones, because why would you select an invisible link?
      if($(link).css('visibility') == 'visible'){
        jQuery(".download-link").addClass("ZIP-selected-link");
        downloadArray.push(link.getAttribute('href'));
      }
    });
   
    //Get the list of links
    //Put the links in the array
  });
});




