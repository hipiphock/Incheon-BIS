$(document).ready(function(){
		
	/*안내기통신 탭*/
	$(function(){
		
		$(".tab1").click(function(){
			$('.tab1').addClass('click');
            $('.tab2,.tab3,.tab4,.tab5').removeClass('click'); 
            $('.tabCon2,.tabCon3,.tabCon4,.tabCon5').hide();
			$('.tabCon1').show();
		});
		
		$(".tab2").click(function(){
			$('.tab2').addClass('click');
            $('.tab1,.tab3,.tab4,.tab5').removeClass('click'); 
            $('.tabCon1,.tabCon3,.tabCon4,.tabCon5').hide();
			$('.tabCon2').show();
		});
		
		$(".tab3").click(function(){
			$('.tab3').addClass('click');
            $('.tab1,.tab2,.tab4,.tab5').removeClass('click'); 
            $('.tabCon1,.tabCon2,.tabCon4,.tabCon5').hide();
			$('.tabCon3').show();
		});
		
		$(".tab4").click(function(){
			$('.tab4').addClass('click');
            $('.tab1,.tab2,.tab3,.tab5').removeClass('click'); 
            $('.tabCon1,.tabCon2,.tabCon3,.tabCon5').hide();
			$('.tabCon4').show();
		});
		
		$(".tab5").click(function(){
			$('.tab5').addClass('click');
            $('.tab1,.tab2,.tab3,.tab4').removeClass('click'); 
            $('.tabCon1,.tabCon2,.tabCon3,.tabCon4').hide();
			$('.tabCon5').show();
		});
		
	});

	
});