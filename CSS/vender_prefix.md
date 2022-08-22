종종 특정 웹사이트에서 F12를 눌러 CSS를 보다보면 -moz-처럼 CSS 규칙에 접두어가 붙은 것을 볼 수 있다. 이를 vender prefix(벤더 프리픽스)라고 한다. 그렇다면 vender prefix란 무엇이며, 왜 사용할까?

# vender prefix; 표시 남기기
- 브라우저 제작사가 속성, 값 등 CSS 일부에 실험적이거나 독점적이라는 표시를 남기는 방법

## 일반적인 프리픽스
- 아래의 표에 있는 것들 중 `-moz-`와 `-webkit-`은 다른 것에 비해 자주 보았을 것이다.

|prefix|vender|
|:--|:---|
|-epub-|국제 디지털 출판 포럼 ePub 형식|
|-moz-|mozilla 기반 브라우저(ex. firefox ..)|
|-ms-|Microsoft Internet explore|
|-o-|opera 기반 브라우저|
|-webkit-|Safari, Chrome 등 Webkit 기반 브라우저|

## 사용하는 이유
### 왜 사용할까?
- 브라우저 제작사들이 다른 브라우저와 호환되지 않는 방식을 써본 것이 널리 퍼져, 잘못된 관행으로 굳어지는 것을 막기 위해 쓴다고 한다.
- 쉽게 말해 **크로싱 브라우저**를 위해 사용한다고 생각하면 된다.

### 그렇다면 나도 사용해야 할까?
- 굳이 사용하지 않아도 된다. 그러나 브라우저 별로 스타일이 다르게 적용되어야할 경우에는 사용하는 것이 좋다. 
- 사실 개발자 입장에선 다소 번거로운 일이 될 수 있지만, 따로 설정해준다면 사용자 입장에서는 더 편리해지기 때문이다.

## 사용 방법
- 사용하는 방법은 간단하다. 브라우저 별로 적용할 스타일을 작성한 뒤, 가장 마지막 줄에 기본 속성을 실행해주면 된다.

```css
.className {
    background:-webkit-linear-gradient(to bottom, babypink, white 50%);
    background:-moz-linear-gradient(to bottom, babypink, white 50%);
    background:-ms-linear-gradient(to bottom, babypink, white 50%);
    background:-o-linear-gradient(to bottom, babypink, white 50%);
    background:linear-gradient(to bottom, babypink, white 50%);
}
```