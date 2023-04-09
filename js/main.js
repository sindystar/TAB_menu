const main = document.querySelector("main");
const btns = main.querySelectorAll("ul li");
const boxs = main.querySelectorAll("section article");
let speed = converSpeed(boxs[0]);//4개의 아티클 모두 깉은 duration이 적용 되므로 하나 정해서 그 박스의  duration을 함수로 측정한다 
let enableClick = true; 

//btns에 반복을 돌면서 (일반 for문, forEach문)
btns.forEach((el, ind) => {
  //클릭 이벤트를 부여한다 
  el.addEventListener("click", (e) => {
    //a태그의 링크 이벤트는 막고 
    e.preventDefault();

    //재이벤트 방지 구문 (isOn) contains사용
    let isOn = e.currentTarget.classList.contains("on");
    if(isOn) return;
    //ison은 재클릭 방지중 이미 클릭된 요소를 도 클릭해서 그 대상에 반복적인 이벤트가 발생 하지 않도록 방지문 

    if (enableClick) {
      enableClick = false
      activation(btns, ind);
      activation(boxs, ind);
      new Anim(main, {
        prop: "height",
        value:matchHT(ind),
        duration:speed,
      })
    }
  })
});

//할성화 함수를 만듦
function activation(arr, index) {
  for (let box of arr) box.classList.remove("on");
  arr[index].classList.add("on");

  setTimeout(() => {
    enableClick = true;
  }, speed)

  //setTimeout(실행할 함수, 시간)
  //실행 함수룰 무조건 실행 하는데 잠깐 '시간'동안 멈춘뒤 이후에 실행 함수를 실행 하는 함수   
}
//위의 공통 부분에서, 변화 되는 부분을 매개 변수로 받을수 있도록 만들면서 틀을 제작 => 활성화 함수 

//높이값 모션 함수 

function matchHT(index) {
  let ht = getComputedStyle(boxs[index]).height; //height값을 가지고 오되, 400px라는 문자 값을 가지고 오지만 0.5s라는 문자값으로 가지고 온다 

ht = parseInt(ht); //ht를 정수 값으로 변환해서 다시 ht에 대입함 
//console.log(ht);
return ht; //함수 밖에서 값을 적용 시키기 위해 반환 시킴 
}

function converSpeed(el) {
  let sd = getComputedStyle(el).transitionDuration;
  //값을 가지고 오지만 0.5s라는 문자 값으로 가지고 온다 
  sd = parseFloat(sd) * 1000; //1. parseFloat으로 0.5s를 실수 값인 0.5로 변환 하고 *1000을 해주므로 밀리 세컨 단위로 변환 하고 sd에 대입 
  return sd;
}

/*
자바 스크립트에서 스타일 값을 가져오는 방법

1. getComputedStyle() 메서드 
외부 파일로 스타일 값을 지정하는 경우 자바 스크립트가 외부 파일에 접근 해서 스타일을 가지고 옴 

2.element.style 속성 
html태그 자체에 어떤 방식으로든 스타일을 지정도어 있는 경우 자바스크립트가 그 스타일을 가지고 옴 
*/
