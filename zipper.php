<?php
   if ($_POST){
    $filesArray = $_POST['filestoZip'];
      if(extension_loaded('zip')){
        $zip = new ZipArchive();
        $zip_name = "bundled_files.zip";
        
        // Delete the previous file so we get a clean download
        if(file_exists($zip_name)){
          unlink($zip_name);
        }

        if($zip->open($zip_name, ZIPARCHIVE::CREATE)!==TRUE){       // Opening zip file to load files
          $error .=  "* Sorry ZIP creation failed at this time<br/>";
        }

        // Add files to the zip file
        foreach($filesArray as $absPath) {
          $baseString = "uploads";
          $stringPos = strpos($absPath, $baseString);
          $urlFromUploads = substr($absPath,$stringPos);
          $relativeFile = "../../".$urlFromUploads;
          $fileName = substr(strrchr($relativeFile, "/"), 1);
          if ( file_exists( $relativeFile ) ){
            $zip->addFile($relativeFile, $fileName);
          }
        }

        if ($zip->close() === false) {
          exit("Error creating ZIP file");
        };
  }else
      $error .= "* You dont have ZIP extension<br/>";
}
?>