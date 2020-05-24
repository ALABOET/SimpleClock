
$(document).ready(function(){
     let inputvalue = document.querySelector('input');
     
    $('#btn1').on('click',function()
    {
        alert('Будильник установлен на обычное время.');
    })
    $('#btn2').on('click',function()
    {
        if(inputvalue.value ==0)
        {
            alert('Ошибка, введите правильное время!');
        }
        else{
        alert('Будильник установлен на ' + inputvalue.value +' часов/часа/час');
        }
    })
    $('#btn3').on('click',function()
    {
        alert('Приложение закрыто, спасибо за использование программы!');
    })
})