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
    // If there is not an array item at 0, hide the download link. If it's not empty, show it.
    checkArraySize();
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
    checkArraySize();
  });

  jQuery(".selectAll").click(function(e){
    e.preventDefault();
    jQuery(".download-link").addClass("ZIP-selected-link");
  });
});

function checkArraySize(){
  if(downloadArray[0]){
    jQuery(".zipItUpMenu").css('display', 'inline-block');
  } else {
    jQuery(".zipItUpMenu").css('display', 'none');
  }
}




