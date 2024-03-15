import { useEffect, useRef } from 'react';
import styled from 'styled-components'

type ClockProps = {
    width?: number;
    height?: number;
}

const ClockBody = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'width' && prop !== 'height'
}) <ClockProps>`

position: relative;
display: flex;
align-items: center;
justify-content: center;
${({ width }) => width && `width: ${width}px`};
${({ height }) => height && `height: ${height}px`};


    &::before{
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ffffff;
        z-index: 2;

    }
    .clock{

        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 2px solid #ffffff;
        box-shadow: 0px 0px 10px rgba(44, 44, 44, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    span {
        position: absolute;
        transform: rotate(calc(30deg * var(--n)));
        inset: 12px;
        text-align: center;
        
        b {
            transform: rotate(calc(-30deg * var(--n)));
            display: block;
            font-size: 2rem;
        }
    }

    .hands {
        display: flex;
        justify-content: center;
        align-items: flex-end;   
            
        i {
            position: absolute;
            background: var(--clr);
            width: 5px;
            height: var(--h);
            border-radius: 70px;
        }
    }

    
`

export default function Clock({
    width = 1100,
    height = 1100
}: ClockProps
) {

    const secondHandLength = width / 2 * 0.8;
    const minuteHandLength = width / 2 * 0.55;
    const hourHandLength = width / 2 * 0.35;


    const secondRef = useRef<HTMLDivElement>(null);
    const minuteRef = useRef<HTMLDivElement>(null);
    const hourRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateClock = () => {
            const time = new Date();
            const s = time.getSeconds() * 6;
            const m = time.getMinutes() * 6;
            const h = time.getHours() * 30 + time.getMinutes() * 0.5;

            if (secondRef.current && minuteRef.current && hourRef.current) {
                secondRef.current.style.transform = `rotate(${s}deg)`;
                minuteRef.current.style.transform = `rotate(${m}deg)`;
                hourRef.current.style.transform = `rotate(${h}deg)`;
            }
        };

        const intervalId = setInterval(updateClock, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className=' w-[100vw] flex justify-center items-center'>

            <ClockBody width={width} height={height}>
                <section className='clock'>
                    <div ref={secondRef} className="hands" style={{ '--clr': '#ffffff', '--h': `${secondHandLength}px` } as React.CSSProperties} ><i></i></div>
                    <div ref={minuteRef} className="hands" style={{ '--clr': '#c7c7c7', '--h': `${minuteHandLength}px` } as React.CSSProperties} ><i></i></div>
                    <div ref={hourRef} className="hands" style={{ '--clr': '#a0a0a0', '--h': `${hourHandLength}px` } as React.CSSProperties} ><i></i></div>

                    {[...Array(12)].map((_, index) => (
                        <span key={index} style={{ '--n': index + 1 } as React.CSSProperties}>
                            <b>{index + 1}</b>
                        </span>
                    ))}
                </section>
            </ClockBody>
        </div>
    )
}
