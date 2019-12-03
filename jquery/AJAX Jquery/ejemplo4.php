<?php
 $aRes = array('nombre' => 'Pepe', 'apellido' => 'Perez');

        require_once('Services_JSON.php');
        $oJson = new Services_JSON();
        echo $oJson->encode($aRes);

?>