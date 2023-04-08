const btns = document.querySelectorAll("ul li");
const boxs = document.querySelectorAll("section article");

//btn에 반복을 돌면서 (일반for문, forEach문)
btns.forEach((el, index) => {
  //클릭 이벤트를 부여한다 
  el.addEventListener("click", (e) => {
    //a태그의 링크이벤트는 막고
    e.preventDefault();

    //버튼에 반복을 돌면서 모두 on을 지우고 
    for (let btn of btns) btn.classList.remove("on");
    //클릭한 인덱스의 버튼만 on을 붙인다 
    btns[index].classList.add("on");

    //박스에 반복을 돌면서 모두 on을 지우고 
    for (let box of boxs) box.classList.remove("on");
    //클릭한 인덱스의 박스만 on을 붙인다 
    boxs[index].classList.add("on");
  })
})