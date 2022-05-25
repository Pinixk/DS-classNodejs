const a = () => console.log(this);  a();    
// {} 빈 공백, node에는 DOM과 BOM이 없음
// node(node모듈)/browser(window)s

function b(){console.log(this);}    b();    
// window 정보