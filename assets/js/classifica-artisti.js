// Build list of quadri e append to grid
function loadArtisti(artisti){
    html ="";
    for(i in artisti){
        index = parseInt(i)+1;
        html+=`<tr class="artista-row">`;
        if(i<3){
            html+=`<th scope="row"><h3 class="mt24" style="color:rgb(188,0,111)">`+index+`</h3></th>`;
        }else{
            html+=`<th scope="row"><h4 class="mt32" >`+index+`</h4></th>`;
        }
        html+=`<td>
                    <div class="user-img-wrap">
                        <img alt="Pic" class="inline-block" src="assets/img/artisti/`+artisti[i].img+`">
                    </div>
                </td>
                <td>
                    <h6 class="mb0 mt16">`+artisti[i].name+`</h6>
                    <p class="">`+artisti[i].intro+`</p>
                </td> 
                <td>39</td> 
                <td>
                    <div class="quadro-img-wrap">
                        <div class="background-image-holder fadeIn" style="background-color: transparent; background-image: url(`+artisti[i].quadro1+`); background-repeat: repeat; background-attachment: scroll; background-clip: border-box; background-origin: padding-box; background-position: initial; background-size: auto auto;">
                            <img alt="image" class="background-image" src="assets/img/quadri/`+artisti[i].quadro1+`" style="display: none;">
                        </div>
                    </div>
                </td>
                <td>
                    <div class="quadro-img-wrap">
                        <div class="background-image-holder fadeIn" style="background-color: transparent; background-image: url(`+artisti[i].quadro2+`); background-repeat: repeat; background-attachment: scroll; background-clip: border-box; background-origin: padding-box; background-position: initial; background-size: auto auto;">
                            <img alt="image" class="background-image" src="assets/img/quadri/`+artisti[i].quadro2+`" style="display: none;">
                        </div>
                    </div>
                </td>
                <td>
                    <div class="quadro-img-wrap">
                        <div class="background-image-holder fadeIn" style="background-color: transparent; background-image: url(`+artisti[i].quadro3+`); background-repeat: repeat; background-attachment: scroll; background-clip: border-box; background-origin: padding-box; background-position: initial; background-size: auto auto;">
                            <img alt="image" class="background-image" src="assets/img/quadri/`+artisti[i].quadro3+`" style="display: none;">
                        </div>
                    </div>
                </td>
            </tr>`;
    }
    return html;
}
artistiPreferiti = [
    {
        "name":"Gabriele scartozzi",
        "intro":"dipingo per hobby e per passione...autodidatta...",
        "img":"78.jpg",
        "quadro1":"151.jpg",
        "quadro2":"157.jpg",
        "quadro3":"163.jpg",
        "quadro4":"163.jpg",
    },
    {
        "name":"Ulder",
        "intro":"Architetto con la passione della pittura...",
        "img":"65.jpg",
        "quadro1":"836.jpg",
        "quadro2":"151.jpg",
        "quadro3":"210.jpg",
        "quadro4":"157.jpg",
    },
    {
        "name":"Ulder",
        "intro":"Architetto con la passione della pittura...",
        "img":"106.jpg",
        "quadro1":"151.jpg",
        "quadro2":"157.jpg",
        "quadro3":"163.jpg",
        "quadro4":"163.jpg",
    },
    {
        "name":"Gabriele scartozzi",
        "intro":"dipingo per hobby e per passione...autodidatta...",
        "img":"78.jpg",
        "quadro1":"151.jpg",
        "quadro2":"157.jpg",
        "quadro3":"163.jpg",
        "quadro4":"163.jpg",
    },
    {
        "name":"Ulder",
        "intro":"Architetto con la passione della pittura...",
        "img":"65.jpg",
        "quadro1":"836.jpg",
        "quadro2":"151.jpg",
        "quadro3":"210.jpg",
        "quadro4":"157.jpg",
    },
    {
        "name":"Ulder",
        "intro":"Architetto con la passione della pittura...",
        "img":"106.jpg",
        "quadro1":"151.jpg",
        "quadro2":"157.jpg",
        "quadro3":"163.jpg",
        "quadro4":"163.jpg",
    },

]    
quadriPreferiti = [
    
    {
        "name":"Ulder",
        "intro":"Architetto con la passione della pittura...",
        "img":"65.jpg",
        "quadro1":"836.jpg",
        "quadro2":"151.jpg",
        "quadro3":"210.jpg",
        "quadro4":"157.jpg",
    },
    {
        "name":"Ulder",
        "intro":"Architetto con la passione della pittura...",
        "img":"106.jpg",
        "quadro1":"151.jpg",
        "quadro2":"157.jpg",
        "quadro3":"163.jpg",
        "quadro4":"163.jpg",
    },
    {
        "name":"Ulder",
        "intro":"Architetto con la passione della pittura...",
        "img":"65.jpg",
        "quadro1":"836.jpg",
        "quadro2":"151.jpg",
        "quadro3":"210.jpg",
        "quadro4":"157.jpg",
    },
    {
        "name":"Gabriele scartozzi",
        "intro":"dipingo per hobby e per passione...autodidatta...",
        "img":"78.jpg",
        "quadro1":"151.jpg",
        "quadro2":"157.jpg",
        "quadro3":"163.jpg",
        "quadro4":"163.jpg",
    },
    {
        "name":"Gabriele scartozzi",
        "intro":"dipingo per hobby e per passione...autodidatta...",
        "img":"78.jpg",
        "quadro1":"151.jpg",
        "quadro2":"157.jpg",
        "quadro3":"163.jpg",
        "quadro4":"163.jpg",
    },
    
    {
        "name":"Ulder",
        "intro":"Architetto con la passione della pittura...",
        "img":"106.jpg",
        "quadro1":"151.jpg",
        "quadro2":"157.jpg",
        "quadro3":"163.jpg",
        "quadro4":"163.jpg",
    },

]    
quadriVisitati = [
    
    {
        "name":"Ulder",
        "intro":"Architetto con la passione della pittura...",
        "img":"106.jpg",
        "quadro1":"151.jpg",
        "quadro2":"157.jpg",
        "quadro3":"163.jpg",
        "quadro4":"163.jpg",
    },
    {
        "name":"Gabriele scartozzi",
        "intro":"dipingo per hobby e per passione...autodidatta...",
        "img":"78.jpg",
        "quadro1":"151.jpg",
        "quadro2":"157.jpg",
        "quadro3":"163.jpg",
        "quadro4":"163.jpg",
    },
    {
        "name":"Gabriele scartozzi",
        "intro":"dipingo per hobby e per passione...autodidatta...",
        "img":"78.jpg",
        "quadro1":"151.jpg",
        "quadro2":"157.jpg",
        "quadro3":"163.jpg",
        "quadro4":"163.jpg",
    },
    {
        "name":"Ulder",
        "intro":"Architetto con la passione della pittura...",
        "img":"65.jpg",
        "quadro1":"836.jpg",
        "quadro2":"151.jpg",
        "quadro3":"210.jpg",
        "quadro4":"157.jpg",
    },
    {
        "name":"Ulder",
        "intro":"Architetto con la passione della pittura...",
        "img":"65.jpg",
        "quadro1":"836.jpg",
        "quadro2":"151.jpg",
        "quadro3":"210.jpg",
        "quadro4":"157.jpg",
    },
    {
        "name":"Ulder",
        "intro":"Architetto con la passione della pittura...",
        "img":"106.jpg",
        "quadro1":"151.jpg",
        "quadro2":"157.jpg",
        "quadro3":"163.jpg",
        "quadro4":"163.jpg",
    },

]    