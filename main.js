document.querySelector('#add').onclick  = function(){

    let theinput = document.querySelector('#task').value;

    if(theinput == 0){
       console.log('zero');

       alert('please Enter a task');
    }else{
        document.querySelector('#list').innerHTML +=' <li><span class="taskname">'+theinput+' </span> <button class="taskdelete delete" >delete</button></li> ';

var task = document.querySelectorAll('.delete');
for(var i = 0;i<task.length ; i++){

   task[i].onclick  = function(){
       this.parentNode.remove();
   }
}



var line = document.querySelectorAll('.taskname');

for(var i = 0;i < line.length; i++){
    line[i].onclick = function(){
      this.classList.add('line');
        console.log('loged');
    }

}





    }

    document.querySelector('#task').value = '';
}



document.querySelector('.taskname').onclick = function(){
   let mydeleteclass = document.querySelectorAll('.taskname');
   for(var i =0 ;i < mydeleteclass.length;i++ ){
    mydeleteclass[i].onclick = function(){
        mydeleteclass[i].querySelector('.taskname').classList.add('.line');
    }
   }
}

