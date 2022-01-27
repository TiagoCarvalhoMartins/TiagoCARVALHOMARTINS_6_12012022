async function getMedias() {
    // Penser à remplacer par les données récupérées dans le json
    const media = [
        {
			"image": "Fashion_Yellow_Beach.jpg",
		},
		{
			"image": "Fashion_Urban_Jungle.jpg",
		},
		{
			"image": "Fashion_Pattern_on_Pattern.jpg",
		},
		{
			"image": "Event_WeddingGazebo.jpg",
		},
		{
			"image": "Event_Sparklers.jpg",
		},
		{
			"image": "Event_18thAnniversary.jpg",
		},
		{
			"video": "Art_Wooden_Horse_Sculpture.mp4",
		},
		{
			"image": "Art_Triangle_Man.jpg",
		},
		{
			"image": "Art_Purple_light.jpg",
		},
		{
			"image": "Art_Mine.jpg",
		}
    ]
    
    return ({media})
}

async function displayMedia(medias) {
    const photographerMedia = document.querySelector(".media");

    medias.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        photographerMedia.appendChild(mediaCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const  {medias}  = await getMedias();
    displayMedia(medias);
};

init();