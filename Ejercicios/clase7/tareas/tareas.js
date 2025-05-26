import { v4 as uuidv4 } from 'uuid';

function taskList(){
    return  [
        {
            id: uuidv4(),
            desc: "Tralalero Tralala",
            completada: false
        },
        {
            id: uuidv4(),
            desc: "BRR BRR Patapim",
            completada: false
        },
        {
            id: uuidv4(),
            desc: "Bombardiro Crocodrilo",
            completada: false
        },
        {
            id: uuidv4(),
            desc: "Don Don Don Satur",
            completada: false
        },
        {
            id: uuidv4(),
            desc: "Tum tum tum Sahur",
            completada: false
        },
    ];
}

export default taskList