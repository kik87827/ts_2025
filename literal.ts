function playFunc(...para :('가위' | '바위' | '보')[]) :('가위' | '바위' | '보')[]{

    return para; 
}

console.log(playFunc('가위'));


const varData = {
    name : 'kim',
} as const

function varFunc(para : 'kim'){

}
varFunc(varData.name);