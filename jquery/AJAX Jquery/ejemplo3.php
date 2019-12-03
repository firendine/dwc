<?php
header ('Content-Type: application/xml; charset=UTF-8');

echo <<<XML
<?xml version='1.0' standalone='yes'?>
<items>
	<item>Item 1</item>
	<item>Item 2</item>
	<item>Item 3</item>
	<item>Item 4</item>
	<item>Item 5</item>
</items>
XML;
?>