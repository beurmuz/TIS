# Shared State
- 자식 컴포넌트들이 가장 가까운 공통된 부모 컴포넌트의 state를 공유해서 쓰는것 
- state에 있는 데이터를 여러 개의 하위 컴포넌트에서 공통적으로 사용하는 경우
- 즉, 하위 컴포넌트가 공통된 부모 컴포넌트의 state를 공유하여 사용하는 것

# 하위 컴포넌트에서 state 공유하기
- 하위 컴포넌트
    ```jsx
    function BoilingVerdict(props) {
        if(props.celsius >= 100) {
            return <p>물이 끓습니다.</p>
        }
        return <p>물이 끓지 않습니다.</p>
    }
    ```

- 상위 컴포넌트
    ```jsx
    function Calculator(props) {
        const [temperature, setTemperature] = useState('');

        const handleChange = (event) => {
            setTemperature(event.target.value);
        }

        return (
            <fieldset>
                <legend>섭씨 온도를 입력하세요: </legend>
                <input
                    value={temperature}
                    onChange={handleChange} />
                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
    ```

## 입력 컴포넌트 추출하기
- Calculator에서 입력 컴포넌트 추출
    ```jsx
    const scaleNames = {
        c: '섭씨',
        f: '화씨'
    };

    function TemperatureInput(props) {
        const [temperature, setTemperature] = useState('');

        const handleChange = (event) => {
            setTemperature(event.target.value);
        }

        return (
            <fieldset>
                <legend>
                    온도를 입력해주세요(단위:{scaleNames[props.scale]}):
                </legend>
                <input value={temperature} onChange={handleChange} />
            </fieldset>
        )
    }
    ```

- Calculator 컴포넌트 수정
    ```jsx
    function Calculator(props) {
        return (
            <div>
                <TemperatureInput scale="C" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
    ```

# 