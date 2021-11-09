import { useRive, useStateMachineInput } from 'rive-react';

function WeatherIcon({className, weather}) {
    const STATE_MACHINE_NAME = 'State Machine 1';
    const INPUT_NAME = 'Number 1';

    const params = {
        src: 'weather.riv',
        stateMachines: STATE_MACHINE_NAME,
        artboard: 'New Artboard',
        autoplay: true,
    };
    const { RiveComponent, rive } = useRive(params);
    const onClickInput = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        INPUT_NAME
    );
    const cycle = (currentIndex) => {
        if (currentIndex === 2) {
            return 0;
        } else {
            return currentIndex + 1;
        }
    }
    return (
        <RiveComponent
            className={className}
            onClick={()=>
                {
                    onClickInput.value = cycle(onClickInput.value);
                }
            }
        />
    );
}

export default WeatherIcon;