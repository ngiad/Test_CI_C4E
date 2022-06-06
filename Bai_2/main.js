const Colot_day = [
    {
        color : "#333",
        Name: "Đen Sáng"
    },
    {
        color : "#fff",
        Name: "Trắng"
    },
    {
        color : "#ccc",
        Name: "Xám"
    },
    {
        color : "blue",
        Name: "Màu Xanh nước biển"
    },
    {
        color : "pink",
        Name: "Màu Hồng"
    },
    {
        colors: "#cb202d",
        Name  : "Career",

    },
    {
        color: "#70e1f5",
        Name : "Nước"
    }
]

function change_color(){
    let ramdomNumber = ramdomNumber_get(Colot_day.length)
    // const back_group = document.querySelector("#body")
    // const color_display = document.getElementsByClassName("color_display")
    // const name_color = document.getElementById("name_color")
    change(Colot_day[ramdomNumber].color)
    change(Colot_day[ramdomNumber].Name) 
}

function ramdomNumber_get(num){
    return Math.floor(Math.random() * num)

}

function change(color,name){
    const ele = document.getElementById("body")
    if(ele){
        ele.style.background = color
        document.getElementById("name_color").innerText = color
        document.getElementById("ma_color").innerText = Name
    }
}

document.getElementById("btn").addEventListener("click", change_color)

