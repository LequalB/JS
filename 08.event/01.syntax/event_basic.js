//2. EventHandler property 방식 HTML과 JS를 분리.

//프로그래밍 언어(Programming Language)
//코드지만, 한편으론 문장.(가독성)
const evPropButton = document.getElementById("btn_ev-prop");
// const evPropButton2 = document.querySelector("#btn_ev-prop");
console.dir(evPropButton);//dir : directory
//js와 java는 camelCase
const book = {
    id : 1, //property
    author : '헤밍웨이',
    title : '노인과 바다'
}
console.log(book.title);

//book.title ='asf';
//JS에서 함수는 일급객체이기 때문에, 객체는 값이고, 값은 프로퍼티에 할당할 수 있음.
evPropButton.onclick = function(){//익명함수 생성 및 할당
    console.log('Called by event property');
}
//하나의 이벤트 밖에 등록 불가.(화살표 함수 활용)

evPropButton.onclick = () => { 
    console.log('새롭게 등록된 이벤트 핸들러');
}
    evPropButton.onclick();
    // <!-- 3.addEventListener method 방식 -->
    // <!-- 3.addEventLister - EventHandler property(여기서는 onclick이라는 property)에 영향을 미치지 않음. -->

//on 접두사 생략
const addEvLsnrButton = document.getElementById("btn-add-ev-lsnr");
console.log(addEvLsnrButton);

//함수 선언문 방식으로 이벤트 핸들러 작성
function buttonHandler(){
    console.log('double clicked!');
}



//콜백함수 Callback function

//addEventListner() 메서드의 인자값으로 함수를 넘겼습니다.
//그때 인자값으로 넘겨진 함수를 Callback function(콜백함수)
//어떤 함수의 인자값으로 함수를 넘겼을 때 넘겨진 함수를 공백함수라고 함.
addEvLsnrButton.addEventListener('dblclick',buttonHandler);

// 화살표 함수로 buttonHandler2라는 이름의 함수 작성
//'mouseover'출력
const buttonHandler2=()=>console.log('mouse over!');
addEvLsnrButton.addEventListener('mouseover',buttonHandler2);

// click 이벤트 화살표 함수를 콜백함수 파라미터 자리에 직접 작성.
//'by addEventListener with arrow function' 출력되도록
addEvLsnrButton.addEventListener('click',()=>{console.log('by addEventListener with arrow function');
});

//이벤트 핸들러 제거
// 1. EventHandler attribute 방식 : onclick attribute 코드 제거
// 2. EventHandler property 방식 : 해당 property에 null값을 할당.
// 3. EventHandler methode 방식 : 별도의 이벤트 제거 함수 호출
addEvLsnrButton.removeEventListener('dblclick',buttonHandler);
addEvLsnrButton.removeEventListener('mouseover',buttonHandler2);

//click이벤트도 제거해주세요.
//익명함수(arrow func), 따라서 제거 불가.


