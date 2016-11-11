// Build list of quadri e append to grid
function loadQuadri(){
	console.log(quadri);
	for(i in quadri){
		html=`
			<div class="col-md-4 col-sm-6 masonry-item project" data-filter="">
	        	<div class="text-center">
	        		<img src="img/chiodo.png" class="chiodo"/>
	        	</div>
	            <div class="image-tile inner-title hover-reveal text-center">
	                <a href="`+quadri[i].src+`" data-lightbox="true">
	                    <img alt="Pic" src="`+quadri[i].src+`" class="cast-shadow"/>
	                    <div class="title">
	                        <h5 class="uppercase mb0">`+quadri[i].title+`</h5>
	                    </div>
	                </a>
	            </div>
	        </div>`;
		$("#grid-quadri-simili-wrap .masonryFlyIn").append(html)
		$("#grid-quadri-simili2-wrap .masonryFlyIn").append(html)
		$("#grid-quadri-artista-wrap .masonryFlyIn").append(html)
	}
}
quadri = [
	{
		"alt":"Pic1",
		"src":"img/quadri/165.jpg",
		"title":"Pinocchio",
		"url":""
	},
	{
		"alt":"Pic1",
		"src":"img/quadri/836.jpg",
		"title":"I colori del bosco",
		"url":""
	},
	{
		"alt":"Pic1",
		"src":"img/quadri/151.jpg",
		"title":"La preda del giorno",
		"url":""
	},
	{
		"alt":"Pic1",
		"src":"img/quadri/157.jpg",
		"title":"Cullata dal mare",
		"url":""
	},
	{
		"alt":"Pic1",
		"src":"img/quadri/163.jpg",
		"title":"Julia",
		"url":""
	},
	{
		"alt":"Pic1",
		"src":"img/quadri/210.jpg",
		"title":"Limoni e melograni",
		"url":""
	}
]