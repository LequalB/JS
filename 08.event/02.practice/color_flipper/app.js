const btn = document.getElementById('btn');
console.log(btn);

const color = document.querySelector('.color');
console.dir(color);

//버튼 한번 클릭했을 때 'button clicked'
//화샇표 함수를 콜백함수로 직접 작성.
//btn.addEventListener('이벤트 동작',콜백함수)
btn.addEventListener('click',()=>{
    // console.log('button clicked');    
    // const book = {};
    // console.log(typeof book);//object 구분 방법
    
    //array indexing(sol1)
    // const r = randomRGBArray[0];
    // const g = randomRGBArray[1];
    // const b = randomRGBArray[2];
    
    //array indexing(sol2)
    const [r, g, b] = getRandomNumber(0,255);
    
    const rgbcolor =  `rgba(${r}, ${g}, ${b})`;
    //템플릿,리터럴(backtick``)
    color.textContent = rgbcolor;
    color.style.color= rgbcolor;
    
    document.querySelector('body').style.backgroundColor = rgbcolor;
    

    console.log(typeof`${r}, ${g}, ${b}`);//타입체크
});

btn.addEventListener('mouseover', ()=>{
    //랜덤값 추출(0 ~ 455) 함수 호출
    getRandomNumber(0,455);
});

function getRandomNumber(min,max) {
     //rgb 랜덤값 추출
    let randomRGBArray = [];
    // console.log(typeof randomRGBArray);//object->구분 불가
    console.log(Array.isArray(randomRGBArray));//array 구분 함수 이용
    
    for(let i=0; i<3; i++){
        const randomNumber = Math.floor(Math.random() * (max-min+1)) + min;
        randomRGBArray.push(randomNumber);
    }
    return randomRGBArray;
    
}
