let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissor = document.querySelector("#scissor")
let oneElem = document.querySelector('#one')
 let twoElem = document.querySelector('#two')
 let threeElem = document.querySelector('#three')
 let autoElem = document.querySelector('.auto')
let bodyElem = document.body


let score = JSON.parse(localStorage.getItem('scre'))||{
           win:0,
            lose:0,
           tie:0,
        };

        
function pick() {
    let a = Math.random()
    let combutermove = '';
    if( a > 0 && a < 1/3) {
        combutermove = 'rock'
    }else if (1/3 < a && a < 2/3){
        combutermove = 'paper'
    }else {
        combutermove = 'scissor'  
    }
    return combutermove;
    
}
// ==========================================
let thePicks = [`<i class="fa-solid fa-hand-back-fist fa-2xl"> </i>`,`<i class="fa-solid fa-hand fa-2xl"></i>`,`<i class="fa-solid fa-hand-peace fa-2xl"></i>`]
function playGame(playerPick) {
    
    let comb = pick() ;
    let result = ''
    if (playerPick==='rock') {
        
        if (comb === 'rock') {
            result = 'tie'
            threeElem.innerHTML=`You ${thePicks[0]} - ${thePicks[0]} Computor`
        } 
        else if (comb === 'paper'){
            result = 'lose'
            threeElem.innerHTML=`You ${thePicks[0]} -${thePicks[1]} Computor`}
            else { result = 'won'
            threeElem.innerHTML=`You  ${thePicks[0]} - ${thePicks[2]} Computor`}
        }
    else if (playerPick === 'scissor') {
            if (comb === 'scissor') {
                result = 'tie'
                threeElem.innerHTML=`You  ${thePicks[2]} - ${thePicks[2]} Computor`
                
            } else if (comb === 'rock'){
                result = 'lose'
                threeElem.innerHTML=`You ${thePicks[2]} - ${thePicks[0]} Computor`}
            else {
                 result = 'won'
                threeElem.innerHTML=`You  ${thePicks[2]} - ${thePicks[1]} Computor`}
         }
     else if (playerPick==='paper') {
                if (comb === 'paper') {
                    result = 'tie'
                    threeElem.innerHTML=`You  ${thePicks[1]} -${thePicks[1]} Computor`
                } else if (comb === 'rock'){
                    threeElem.innerHTML=`You  ${thePicks[1]} - ${thePicks[0]} Computor`

                    result = 'won'}
                else { result = 'lose'
                    threeElem.innerHTML=`You  ${thePicks[1]} - ${thePicks[2]} Computor`
                }  
             }
                if(result === 'won') {
                    ++score.win
                } else if (result === 'lose') {
                    ++score.lose
                } else {++score.tie}
                
                localStorage.setItem('scre',JSON.stringify(score))
             
                // threeElem.innerHTML=`You  ${playerPick} - ${comb} Combuter `
                twoElem.innerHTML = ` ${result.toLocaleUpperCase()}.`
                updateScore() //one 

            }
            updateScore() //two
                // ==========================================================
                
                rock.onclick = function() { 
                    playGame('rock') ;
                }
                paper.onclick = function() {
                    playGame('paper')
                }
                scissor.addEventListener('click',()=> playGame('scissor') ) 
                // = function() {
                //     playGame('scissor')
                // }
                oneElem.onclick = function() {
                }
                reset.onclick = function() {
                    score.win =0
                    score.lose=0
                    score.tie=0
                    localStorage.removeItem('scre')
                    updateScore()  //three  
                }
               
                    // ===================================================
                    
                    
    function updateScore()  {
        oneElem.innerHTML =`  ${score.lose} Lose, ${score.win} Won ,${score.tie} Tie`
    }
    let id;
    let track = false;
     let two = autoElem.onclick = function() {
        if(!track) {
           id = setInterval(function() {
                let a = pick();
                playGame(a)
            },1000 )
            autoElem.innerHTML = `Stop Play`;
            track =true;
        } else {clearInterval(id)
            autoElem.innerHTML = `Auto Play`;

        track = false; }
      }
    
    
    bodyElem.addEventListener('keydown',(event)=>{
        if(event.key == 'Enter') {
        two()
        }
    })
    
    
    
    















// let a ='';
//     let one = document.querySelector("#one")
//     let two = document.querySelector("#two")
//     let three = document.querySelector("#three")
//     let four = document.querySelector("#four")
//     let five = document.querySelector("#five")
//     let six = document.querySelector("#six")
//     let seven = document.querySelector("#seven")
//     let eight = document.querySelector("#eight")
//     let nine = document.querySelector("#nine")
//     let zero = document.querySelector("#zero")
//     let minus = document.querySelector("#minus")
//     let plus = document.querySelector("#plus")
//     let multi = document.querySelector("#multi")
//     let devide = document.querySelector("#devide")
//     let dot = document.querySelector("#dot")
//     let clear = document.querySelector(".non")
//     let equal = document.querySelector("#equal")

//     one.onclick =function() { console.log (a+="1")}
//     two.onclick =function() { console.log (a+="2")}
//     three.onclick =function() { console.log (a+="3")}
//     four.onclick =function() { console.log (a+="4")}
//     five.onclick =function() { console.log (a+="5")}
//     six.onclick =function() { console.log (a+="6")}
//     seven.onclick =function() { console.log (a+="7")}
//     eight.onclick =function() { console.log (a+="8")}
//     nine.onclick =function() { console.log (a+="9")}
//     zero.onclick =function() { console.log (a+="0")}
//     minus.onclick =function() {console.log(a+="-")}
//     plus.onclick =function() {console.log(a+="+")}
//     multi.onclick =function() {console.log(a+="*")}
//     dot.onclick=function() {console.log(a+=".")}
//     devide.onclick =function() {console.log(a+="/")}
//     clear.onclick =function() {
//         a=""
//         console.log(0)}
//     equal.onclick=function() {
//        console.log( eval(a))
//        a = eval(a)
//     }

// ======================================================================




//     let a = 0;
// let b = document.querySelector(".Sho")
// let c = document.querySelector("#add")
// let d = document.querySelector("#two")
// let e = document.querySelector("#three")
// let f = document.querySelector("#zero")
// b.onclick = function() { console.log(`cart quantity: ${a}`)}
// c.onclick = function() { console.log(++a)}
// d.onclick =function() { console.log(a+=2 )}
// e.onclick = function() {console.log(a+=3)}
// f.onclick = function() {
//     a=0;
//     console.log(`the quantity is reset`)}



// function reverse(a) {
// a=a+"";
//  return a.split("").reverse().join("")

// }
// console.log(reverse(423))















