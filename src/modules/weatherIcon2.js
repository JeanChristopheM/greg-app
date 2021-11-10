import { useEffect } from 'react';
import { useRive, useStateMachineInput } from 'rive-react';

function WeatherIcon2({className, state}) {
    const STATE_MACHINE_NAME = 'State Machine 1';
    const STATE_NAME = 'state';
    const SWITCH_NAME = 'switchAnimation';

    const params = {
        src: `${process.env.PUBLIC_URL}/weather2.riv`,
        stateMachines: STATE_MACHINE_NAME,
        artboard: 'New Artboard',
        autoplay: true,
    };
    const { RiveComponent, rive } = useRive(params);
    const triggerInput = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        SWITCH_NAME
    );
    const stateInput = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        STATE_NAME
    );
    useEffect(() => {
        if (stateInput) {
            setTimeout(() => {
                stateInput.value = state.weather;
                triggerInput.fire();
            }, 250);
        }
    }, [stateInput,triggerInput,state.weather]);
    return (
        <RiveComponent
            className={className}
        />
    );
}

export default WeatherIcon2;