import gsap from 'gsap'

gsap.to('.box', {
    y: 200, //we can change position by using X, Y 
    opacity:1,
    rotation: 360,
    background: '#ff6f61',
    borderRadius: '50%' ,
    scale:1.25 ,
    duration: 5,
    delay: 0.5, //mean waiting time
    ease: 'power1.inOut',
    //repeat: -1, //Unlimited animation
    
})