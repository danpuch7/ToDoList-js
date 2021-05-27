//            PLAN
//1.Identifation all active elements
//2.Coding:
//    1Add text in list(enter)
//    2Saving(Save to Local Storage)
//    3Button clear(LStorage,list)
//    4Delete one item
//    5Done item
//    6Writing mode
//    7Tips
//    8Close Tips

//MAIN FUNCTIONS
function Preloader()
    {
        let $input=document.querySelector('.lists'),
            $ul=document.querySelector('ul.todos'),
            $li=document.querySelectorAll('ul.todos li')

        loadList()


        let $basket=document.querySelectorAll('.todos span'),
            $save=document.querySelector('button.save'),
            $clear=document.querySelector('button.clear'),
            $showtips=document.querySelector('button.tipBtn'),
            $pencil=document.querySelector('#pencil'),
            $overlay=document.querySelector('#overlay'),
            $hidetips=document.querySelector('.closebtn')

        function deleteItem(){
            for(let i=0;i<$basket.length;i++)
                {
                    $basket[i].addEventListener('click',function(){
                        this.parentElement.remove()
                    })
                }
        }

//FUNCTION OPEN
        deleteItem()


//BUTTONS
        $input.addEventListener('keypress',function(key){
            if(key.which == 13)
                {
                    let text = this.value.trim()
                    this.value=''

                    if(text)
                        {
                            let li=document.createElement('LI'),
                                span=document.createElement('SPAN'),
                                icon=document.createElement('I')
                            icon.classList.add('fas','fa-trash-alt')
                            span.insertAdjacentElement('afterbegin',icon)
                            li.textContent=text
                            li.insertAdjacentElement('afterbegin',span)

                            $ul.insertAdjacentElement('afterbegin',li)

                            $basket=document.querySelectorAll('.todos span')
                            deleteItem()




                        }
                    else
                        {
                            alert('ERROR!Wrong Data!')
                        }
                }
        })


        $ul.addEventListener('click',function(){
            if(event.target.tagName)
                {
                    event.target.classList.toggle('checked')
                }
        })

        $save.addEventListener('click',()=>{
            localStorage.setItem('list',$ul.innerHTML)
        })

        $clear.addEventListener('click',()=>{
            localStorage.removeItem('list')
            $ul.innerHTML=''
        })

        $pencil.addEventListener('click',()=>{
            $input.classList.toggle('display')
        })

        $showtips.addEventListener('click',()=>{
            $overlay.style.height='100vh'
        })

        $hidetips.addEventListener('click',()=>{
            $overlay.style.height='0'
        })

//CREATE FUNCTIONS



        function loadList(){
            let list = localStorage.getItem('list')
            if(list)
                {
                    $ul.innerHTML=list
                }
        }


    }

document.addEventListener('DOMContentLoaded',Preloader)
