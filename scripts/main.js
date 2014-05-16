function moveTableCell(e, data){
	var $el = $('input:focus');
	var indexCell = $el.parent().index();
	var indexRow  = $el.parent().parent().index();
	var dir = {
		up: 38,
		down: 40, 
		left: 37,
		right: 39
	}
	switch(e.keyCode){
		case dir.up:
			indexRow--;
			break;
		case dir.down:
			indexRow++;
			break;
		case dir.left:
			indexCell--;
			break;
		case dir.right:
			indexCell++;
			break;
		default:
			return;
			break;
	}
	$('table tr:nth-child(' + ( indexRow + 1)  + ') td:nth-child(' + ( indexCell + 1)  + ') input').focus();

}