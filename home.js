AFRAME.registerComponent("cursor-handler",{
    init:function(){
        plane=document.querySelector("#bbrain")
        console.log(plane)
        plane.addEventListener("click",()=>{
    
            body=document.querySelector("#body")
            console.log(body)
            pos=body.getAttribute("position")
            body.setAttribute("visible",false)
            document.querySelector("#Dbrain").position=pos
            document.querySelector("#Dbrain").visible="true"




        })
        
    }
})