//POPUP OPE
let popup = document.querySelector('.popup');
let movies = document.querySelector('.movies');

document.querySelector('.gate__about').addEventListener('click', function() {
    popup.style.opacity = 1 
    popup.style.visibility = 'visible';
});


//POPUP CLOSE
document.querySelector('.popup__close').addEventListener('click', function() {
    popup.style.opacity = 0 
    popup.style.visibility = 'hidden';
});


//SEARCH
let search = document.querySelector('.search__bar');
let lists = document.querySelector('.list');
let block =  document.querySelector('.search__block');
search.addEventListener('input',filter)

function filter() {
    lists.style.opacity = 1;
    lists.style.visibility = 'visible' ;
    block.style.opacity = 1;
    block.style.visibility = 'visible' ;
    let search = document.querySelector('.search__bar');
    let term  = search.value.toLowerCase();
    let items = document.querySelectorAll('.item')
    Array.from(items).forEach(item => {
        const title =  item.textContent;
        if (title.toLowerCase().includes(term)) {
            item.style.display ='block';
        }else{
            item.style.display = 'none';      
        }
    });
}


//CLOSE
block.addEventListener('click', function() {
    lists.style.opacity = 0;
    lists.style.visibility = 'hidden' ;
    block.style.opacity = 0;
    block.style.visibility = 'hidden' ;
    search.value = ''
})


//FAVOURITE
let love = document.querySelectorAll('.des__love') 
Array.from(love).forEach(function(cur){
cur.addEventListener('click', function() {
   cur.classList.toggle('blue')
})
});


//LIKES

let likes = document.querySelectorAll('.like');
        Array.from(likes).forEach(like => {   
            like.addEventListener('click',looplikes)  
        })

function looplikes() {
    let parent = this; 
    let counts = parent.querySelector('.counts')
    counts.textContent++;
    let like = parent.querySelector('.des__likes'); 

    (counts.textContent > 0) ? like.classList.add('blue') : like.classList.remove('blue')
               
    let _movies =  document.querySelectorAll('.movie');
               
    _movies = Array.from(_movies).sort((a,b) => {
                   
        return (+a.querySelector('.counts').textContent <= 
                +b.querySelector('.counts').textContent) ? 
                +1 : -1;
        //return +b.querySelector('.counts').textContent - (+a.querySelector('.counts').textContent)
    })

    movies.innerHTML = ''
    _movies.forEach(movie => {
        movies.appendChild(movie)
    })
 
}    


//PRICES

    let cast =  document.querySelectorAll('.casing');
    Array.from(cast).forEach(cur => { 
        cur.addEventListener('click',function(e) {
            if (e.target.className  = 'like') {
                let parent = this;
                let price = parent.querySelector('.des__price')
                let counts = parent.querySelector('.counts')
                if ( counts.textContent > 5) {
                    price.textContent = (0.5 + parseFloat( price.textContent)) + ' ' + '$'
                }
                
            
            }
            
            
        } )  
    }) 






              

   
   
    
   
