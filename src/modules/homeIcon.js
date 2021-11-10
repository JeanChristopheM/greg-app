import { useRive, useStateMachineInput } from 'rive-react';

function HomeIcon({className, onClickEvent}) {
    const STATE_MACHINE_NAME = 'State Machine 1';
    const HOVER_NAME = 'Switch';
    const CLICK_NAME = 'Trigger 2';

    const params = {
        src: `${process.env.PUBLIC_URL}/homeicon.riv`,
        stateMachines: STATE_MACHINE_NAME,
        artboard: 'New Artboard',
        autoplay: true,
    };
    const { RiveComponent, rive } = useRive(params);
    const onClickInput = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        CLICK_NAME
    );
    const onHoverInput = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        HOVER_NAME
    );
    return (
        <RiveComponent
            className={className}
            onMouseEnter={()=>onHoverInput.value=true}
            onMouseLeave={()=>onHoverInput.value=false}
            onClick={()=>
                {
                    onClickInput.fire();
                    onClickEvent();
                }
            }
        />
    );
}

export default HomeIcon;