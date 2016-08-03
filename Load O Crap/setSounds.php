<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title></title>
    </head>
    <body>
        <?php
            $nameArray=array();
            $soundArray=array();

            $names = fopen("names.txt","r");
            $sounds = fopen("sounds.txt","r");

            $index=0;

            while(!feof($sounds)) {
                $sound=fgets($sounds);
                $name=fgets($names);

                $nameArray[$index]=trim($name);
                $soundArray[$index]=trim($sound);

                $index++;
            }
        ?>
        
        <form action="update.php" method="post" enctype="multipart/form-data">
            <?php 
                for($i=0;$i<20;$i++) {
                    echo "<p>".$nameArray[$i]."<br>
                    <input type='text' name='name".$i."' id='name".$i."'>
                    <input type='file' name='file".$i."' id='file".$i."'></p>";
                }
                
            ?>
            
        </form>
    </body>
</html>
