document.addEventListener("DOMContentLoaded", function(event) { 
	var newR = function newReview () {
		var textInput = document.getElementById("footerInput").value,
			date = new Date;
			month=date.getMonth();
            monthsList=['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Ноября','Декабря'];
		if (textInput==''){
			reviewsList.innerHTML += '';
			footerInput.style.cssText = 'border: 1px solid red;transition: border 0.2s ease;';
		}else{
			footerInput.style.cssText = 'border: 1px solid #a9a9a9';
			reviewsList.innerHTML += 
			'<li class="reviews-item">' +
				'<h2 class="reviews-item-name bold">' +
					'Гость' +
				'</h2>' +
				'<span class="reviews-item-date regular">' +
					date.getDate()+' '+ monthsList[month]+' '+date.getFullYear()+
				'</span>' +
				'<p class="reviews-item-text regular">' +
					textInput +
				'</p>' +
			'</li>';			
		}		
		document.getElementById("footerInput").value="";
	};

	footerButton.onclick = newR;

	document.onkeyup = function (e) {
		e = e || window.event;
		if (e.keyCode == 13 && e.altKey) {
			newR();
		}
		return false;
	}
 });