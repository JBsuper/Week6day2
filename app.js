//Populate boxes
let boxes = '';
for(let i = 0; i < 16; i++){
	boxes +='<div class="boxes"></div>';
}
$('#container').html(boxes);

$('#container').on('click','.boxes',function(){
	$(this).toggleClass('clicked');
});