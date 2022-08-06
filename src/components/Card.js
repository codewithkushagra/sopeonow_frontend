import React from 'react';

function Card(props) {

    const svg = {
        'Ward': <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M47.5 12.6h-11V.5h-25v12.1H.5v29.3h6.2v5.6h34.6v-5.6h6.2V12.6zm-34-10.1h21v37.4h-4.2v-8H17.7v8h-4.2V2.5zm14.8 37.4h-8.7v-6h8.7v6zm-25.8 0V14.6h9v25.3h-9zm36.8 5.6H8.7v-3.6h30.7v3.6zm6.2-5.6h-9V14.6h9v25.3z"/><path d="M23 14.6h2v-2.9h2.9v-2H25V6.8h-2v2.9h-2.9v2H23zM6 18.5h2v3.1H6zM6 25.7h2v3.1H6zM6 32.9h2V36H6zM40 18.5h2v3.1h-2zM40 25.7h2v3.1h-2zM40 32.9h2V36h-2zM17.7 18.5h2v3.1h-2zM17.7 25.7h2v3.1h-2zM23 18.5h2v3.1h-2zM23 25.7h2v3.1h-2zM28.3 18.5h2v3.1h-2zM28.3 25.7h2v3.1h-2z"/></svg>,
        'Room': <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 48 48"><path fill="#333" fillRule="evenodd" d="M23 6.77491V41.2252L34 37.5585V10.4416L23 6.77491ZM22.3162 4.4388C21.6687 4.22296 21 4.70493 21 5.38748V42.6126C21 43.2952 21.6687 43.7772 22.3162 43.5613L35.3162 39.228C35.7246 39.0919 36 38.7097 36 38.2793V9.72082C36 9.29039 35.7246 8.90825 35.3162 8.77214L22.3162 4.4388Z" clipRule="evenodd"/><path fill="#333" d="M27 23.0001C27 24.1046 26.5523 25.0001 26 25.0001C25.4477 25.0001 25 24.1046 25 23.0001C25 21.8955 25.4477 21.0001 26 21.0001C26.5523 21.0001 27 21.8955 27 23.0001Z"/><path fill="#333" fillRule="evenodd" d="M21 8.00006H12V39.0001H21V37.0001H14V10.0001H21V8.00006Z" clipRule="evenodd"/></svg>,
        'Bed ID': <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" height='50' width='50' viewBox="0 0 64 64"><path d="M32 23h6a1 1 0 0 0 1-1V19h3a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1H39V8a1 1 0 0 0-1-1H32a1 1 0 0 0-1 1v3H28a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3v3A1 1 0 0 0 32 23zm-3-6V13h3a1 1 0 0 0 1-1V9h4v3a1 1 0 0 0 1 1h3v4H38a1 1 0 0 0-1 1v3H33V18a1 1 0 0 0-1-1zM60 33H26.76l-12-8.13a1 1 0 0 0-.75-.16 1 1 0 0 0-.64.42l-2.25 3.31a1 1 0 0 0 .27 1.39L22 37H10V19a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1V56a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1V48H54v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V34A1 1 0 0 0 60 33zM13.39 28.74l1.13-1.66 11.36 7.75a1.06 1.06 0 0 0 .57.17H59v2H25.52zM8 55H5V20H8zm2-9V39H54v7zm49 9H56V39h3z"/></svg>,
        'Payment': <svg xmlns="http://www.w3.org/2000/svg" width="47" height="44" viewBox="0 0 28 25"><path d="M25.42,19.67 C25.1438576,19.67 24.92,19.8938576 24.92,20.17 L24.92,22 C24.92,22.8284271 24.2484271,23.5 23.42,23.5 L3,23.5 C2.17157288,23.5 1.5,22.8284271 1.5,22 L1.5,6 C1.5,5.17157288 2.17157288,4.5 3,4.5 L7.91,4.5 C8.18614237,4.5 8.41,4.27614237 8.41,4 C8.41,3.72385763 8.18614237,3.5 7.91,3.5 L3,3.5 C1.61928813,3.5 0.5,4.61928813 0.5,6 L0.5,22 C0.5,23.3807119 1.61928813,24.5 3,24.5 L23.42,24.5 C24.7984352,24.4945191 25.9145191,23.3784352 25.92,22 L25.92,20.17 C25.92,19.8938576 25.6961424,19.67 25.42,19.67 Z"/><path d="M26,11.31 L25.92,11.31 L25.92,6 C25.9145191,4.62156478 24.7984352,3.50548092 23.42,3.5 C23.1438576,3.5 22.92,3.72385763 22.92,4 C22.92,4.27614237 23.1438576,4.5 23.42,4.5 C24.2484271,4.5 24.92,5.17157288 24.92,6 L24.92,6.28 L24.36,6.28 L21.36,3.28 L19.18,1.1 C19.0861167,1.00534367 18.9583188,0.952100838 18.825,0.952100838 C18.6916812,0.952100838 18.5638833,1.00534367 18.47,1.1 L15.83,3.74 L13.18,1.1 C12.9821863,0.90821671 12.6678137,0.90821671 12.47,1.1 L7.29,6.28 L5.5,6.28 C5.22385763,6.28 5,6.50385763 5,6.78 C5,7.05614237 5.22385763,7.28 5.5,7.28 L24.92,7.28 L24.92,11.28 L22,11.28 C20.0670034,11.28 18.5,12.8470034 18.5,14.78 L18.5,15.16 C18.5,17.0929966 20.0670034,18.66 22,18.66 L26,18.66 C26.8284271,18.66 27.5,17.9884271 27.5,17.16 L27.5,12.81 C27.5,11.9815729 26.8284271,11.31 26,11.31 Z M18.83,2.16 L20.28,3.61 C19.4031054,4.19916775 18.2568946,4.19916775 17.38,3.61 L18.83,2.16 Z M16.67,4.32 C17.945453,5.29354535 19.714547,5.29354535 20.99,4.32 L22.99,6.32 L18.36,6.32 L16.53,4.45 L16.67,4.32 Z M10.87,6.32 L13.87,3.32 L14.57,4.02 L12.27,6.28 L10.87,6.32 Z M15.32,4.69 L17,6.28 L13.68,6.28 L15.32,4.69 Z M12.83,2.16 L13.2,2.53 L9.45,6.28 L8.71,6.28 L12.83,2.16 Z M26.5,17.16 C26.5,17.4361424 26.2761424,17.66 26,17.66 L22,17.66 C21.3369588,17.66 20.701074,17.3966079 20.232233,16.927767 C19.7633921,16.458926 19.5,15.8230412 19.5,15.16 L19.5,14.78 C19.5,13.3992881 20.6192881,12.28 22,12.28 L26,12.28 C26.2761424,12.28 26.5,12.5038576 26.5,12.78 L26.5,17.16 Z"/><circle cx="22.08" cy="15" r="1"/></svg>
    }

    const classbg="flex text-center justify-center items-center max-w-sm h-[100px] w-[150px] rounded-xl shadow-lg flex-col items-center lg:h-[220%] lg:w-[89.5%] md:h-[195%] md:w-[90%] sm:w-[200%] md:my-0 my-2 "+props.buttonColor;

    return(
        <div className={classbg} onClick={props.onClick} onDoubleClick={props.onDoubleClick}>
            <div className = "inline-flex justify-center items-center">
                {svg[props.title]}
            </div>
            <div>
                {props.title}
            </div>
            
        </div>
    );
    
}

export default Card;



