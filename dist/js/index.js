//boton 
var btnChat = document.getElementById('btnChat');
// Esta es el que publica
var chatBox = document.getElementById('chatBox');
// Este es el contenedor
var contentBox = document.getElementById('chat-box');

// Declaramos Funcion del chat
function publicar(){
	if (chatBox.value){
			
	var chatContainer = document.getElementById('x');
	var divComent= document.createElement('div');
	divComent.className='item';
	var publicacion = document.createElement('p');

	publicacion.textContent = chatBox.value;
	
	divComent.appendChild(publicacion);	
	contentBox.appendChild(divComent);
	chatBox.value='';
	}
}

chatContainer = btnChat.addEventListener('click',publicar);




function borrar(){
	var id=this.getAttribute('data-id');
	var ul=document.getElementById('ul')
	var li=document.getElementById(id)
	ul.removeChild(li);
}
// var btnBorrar=document.getElementById('btn')
// chatContainer = btnBorrar.addEventListener('click',borrar);

document.addEventListener('click',borrar)